import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import LoadingScreen from "./LoadingScreen";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState(listOfRestaurants);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // const data = await fetch(
            //     "https://namastedev.com/api/v1/listRestaurants",
            // );
            const swiggydata = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.344743&lng=85.80381799999999&page_type=DESKTOP_WEB_LISTING",
            );
            const restaurantList = await swiggydata.json();
            console.log("restaurantList", restaurantList);
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

    // if (loading) {
    //     return <LoadingScreen />;
    // }

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
                        filteredRestaurant.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant.info.id}
                                data={restaurant.info}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
