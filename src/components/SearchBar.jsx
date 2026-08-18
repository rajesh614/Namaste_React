import "../../index.css";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurant, placeholder }) => {
    return (
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
                    placeholder={placeholder}
                    aria-label={placeholder}
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
    )
}

export default SearchBar;