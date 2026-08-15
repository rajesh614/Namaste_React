import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import LoadingScreen from "./LoadingScreen";

// Number of restaurants to load each time user scrolls to bottom
const PAGE_SIZE = 4;

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] =
        useState(listOfRestaurants);
    const [loading, setLoading] = useState(true);
    // State: Track how many restaurants are currently visible (initially PAGE_SIZE = 4)
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    // State: Track whether data is currently being loaded (for loading animations)
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    // Ref: Reference to the "load more" trigger element at bottom of page
    const loadMoreRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const swiggydata = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.344743&lng=85.80381799999999&page_type=DESKTOP_WEB_LISTING",
            );
            const restaurantList = await swiggydata.json();
            console.log("restaurantList", JSON.stringify(restaurantList));
            setListOfRestaurants(
                swiggydata
                    ? restaurantList.data.cards[1]?.card?.card?.gridElements
                          ?.infoWithStyle?.restaurants
                    : restaurantList?.data?.data?.cards[1]?.card?.card
                          ?.gridElements?.infoWithStyle?.restaurants,
            );
            setFilteredRestaurant(
                swiggydata
                    ? restaurantList.data.cards[1]?.card?.card?.gridElements
                          ?.infoWithStyle?.restaurants
                    : restaurantList?.data?.data?.cards[1]?.card?.card
                          ?.gridElements?.infoWithStyle?.restaurants,
            );
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Computed: Boolean to check if there are more restaurants to load
    const hasMore = visibleCount < filteredRestaurant.length;

    useEffect(() => {
        // Skip if no more restaurants to load or already loading
        if (!hasMore || isLoadingMore) return;

        // Create an Intersection Observer to detect when user scrolls to bottom
        // IntersectionObserver watches for when an element enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the load trigger element is NOT visible, don't do anything
                if (!entry.isIntersecting) return;

                // User scrolled to the bottom, set loading state
                setIsLoadingMore(true);

                // Simulates a paginated API request using the local mock data.
                // In real app, this would be an actual API call
                window.setTimeout(() => {
                    // Load next batch: add PAGE_SIZE to visibleCount (but don't exceed total)
                    setVisibleCount((count) =>
                        Math.min(count + PAGE_SIZE, filteredRestaurant.length),
                    );
                    // Complete loading state after 500ms delay
                    setIsLoadingMore(false);
                }, 500);
            },
            // Options: Trigger callback 200px BEFORE element enters viewport
            // This preloads data before user actually reaches bottom
            { rootMargin: "200px" },
        );

        // loadMoreRef.current gives us the actual HTML DOM element that the ref is attached to
        // This references the <div className="test-load-trigger" ref={loadMoreRef}> at the bottom
        const loaderElement = loadMoreRef.current;

        // Checks if element exists, then tells observer to watch it and fire callbacks when it enters viewport
        if (loaderElement) observer.observe(loaderElement);

        // Cleanup function that stops the observer when component unmounts or effect reruns (prevents memory leaks)
        return () => observer.disconnect();
    }, [hasMore, isLoadingMore]); // Rerun effect when these dependencies change
    // If hasMore becomes false (no more restaurants), this effect runs again and reconnects the observer
    // If isLoadingMore changes, the effect reruns to update the observer state
    // Without these dependencies, the observer would get outdated state values

    return (
        <div className="body">
            <div className="search-bar">
                <div className="search-input-wrapper">
                    <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                    </svg>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search for restaurants or cuisines"
                        aria-label="Search for restaurants or cuisines"
                        onChange={(e) => {
                            const searchText = e.target.value.toLowerCase();
                            const filteredRestaurants =
                                listOfRestaurants?.filter(
                                    (restaurant) =>
                                        restaurant?.info?.name
                                            .toLowerCase()
                                            .includes(searchText) ||
                                        restaurant?.info?.cuisines
                                            .join(", ")
                                            .toLowerCase()
                                            .includes(searchText),
                                );
                            setFilteredRestaurant(filteredRestaurants);
                        }}
                    />
                </div>
            </div>
            <div className="filter">
                <button
                    className="filter-button"
                    onClick={() => setFilteredRestaurant(listOfRestaurants)}>
                    All
                </button>
                <button
                    className="filter-button"
                    onClick={() => {
                        setFilteredRestaurant(
                            listOfRestaurants?.filter(
                                (restaurant) =>
                                    restaurant?.info?.sla?.deliveryTime < 25,
                            ),
                        );
                    }}>
                    Fast Delivery
                </button>
                <button
                    className="filter-button"
                    onClick={() => {
                        setFilteredRestaurant(
                            listOfRestaurants?.filter(
                                (restaurant) =>
                                    restaurant?.info?.avgRating > 4.2,
                            ),
                        );
                    }}>
                    Top Rated
                </button>
            </div>
            <div className="restaurant-container">
                <h2>Restaurants with online food delivery</h2>
                <div className="restaurant-list">
                    {loading ? (
                        <LoadingScreen />
                    ) : filteredRestaurant?.length === 0 ? (
                        <h3>No Restaurants Found.</h3>
                    ) : (
                        filteredRestaurant
                            .slice(0, visibleCount)
                            .map((restaurant) => (
                                <RestaurantCard
                                    key={restaurant.info.id}
                                    data={restaurant.info}
                                />
                            ))
                    )}
                </div>
                <div className="test-load-trigger" ref={loadMoreRef}>
                    {/* Show different messages based on loading state */}
                    {isLoadingMore
                        ? "Loading more restaurants..."
                        : hasMore
                          ? "Scroll down to load more"
                          : "You have reached the end"}
                </div>
            </div>
        </div>
    );
};

export default Body;
