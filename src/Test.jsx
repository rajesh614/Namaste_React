import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import restaurantList from "./utils/mockData";

// Number of restaurants to load each time user scrolls to bottom
const PAGE_SIZE = 4;

const allRestaurants = [
    // Spread the Map values into this new array.
    ...new Map(
        restaurantList.data.cards
            .flatMap(
                (card) =>
                    // Follow the nested API path to its restaurant array.
                    // This navigates through the deeply nested structure of the API response
                    card?.card?.card?.gridElements?.infoWithStyle
                        // Use an empty array when this card does not contain restaurants.
                        ?.restaurants || [],
            )
            // Create [id, restaurant] pairs so the ID can be used as a unique key.
            // Map uses restaurant.info.id as the key for deduplication
            .map((restaurant) => [restaurant.info.id, restaurant]),
    ).values(), // Get only the restaurant objects from the Map (without IDs).
];

const Test = () => {
    // State: Track how many restaurants are currently visible (initially PAGE_SIZE = 4)
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    
    // State: Track whether data is currently being loaded (for loading animations)
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    // Ref: Reference to the "load more" trigger element at bottom of page
    const loadMoreRef = useRef(null);
    
    // Computed: Boolean to check if there are more restaurants to load
    const hasMore = visibleCount < allRestaurants.length;

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
                        Math.min(count + PAGE_SIZE, allRestaurants.length),
                    );
                    // Complete loading state after 500ms delay
                    setIsLoadingMore(false);
                }, 500);
            },
            // Options: Trigger callback 200px BEFORE element enters viewport
            // This preloads data before user actually reaches bottom
            { rootMargin: "200px" },
        );

        // Get reference to the actual DOM element
        const loaderElement = loadMoreRef.current;
        
        // Start observing the loader element if it exists
        if (loaderElement) observer.observe(loaderElement);

        // Cleanup function: Stop observing when component unmounts or effect reruns
        return () => observer.disconnect();
    }, [hasMore, isLoadingMore]); // Rerun effect when these dependencies change

    return (
        <main className="test-infinite-scroll">
            {/* Heading and description */}
            <h1>Mock restaurant infinite scroll</h1>
            <p>Scroll down to load more restaurants from mockData.jsx.</p>

            {/* Restaurant list container */}
            <div className="restaurant-list">
                {/* Display only the first 'visibleCount' restaurants */}
                {allRestaurants.slice(0, visibleCount).map((restaurant) => (
                    // Each restaurant gets its own RestaurantCard component
                    <RestaurantCard
                        key={restaurant.info.id}
                        data={restaurant.info}
                    />
                ))}
            </div>

            {/* Load trigger element - appears at bottom, triggers loading when scrolled into view */}
            <div className="test-load-trigger" ref={loadMoreRef}>
                {/* Show different messages based on loading state */}
                {isLoadingMore
                    ? "Loading more restaurants..."
                    : hasMore
                      ? "Scroll down to load more"
                      : "You have reached the end"}
            </div>
        </main>
    );
};

export default Test;
