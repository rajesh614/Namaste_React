import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./assets/onlylogo.jpg";
import "./index.css";


const restaurantCard = {
    "width": "300px",
    "borderRadius": "10px",
    "overflow": "hidden",
    "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.1)"
};

const restaurantList = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2chVd6OAQlgaFtRgH5MZG3A8z7vPw8YEHJLoVulys7Q&s=10",
        name: "The Treat Restaurant",
        cuisine: "Indian, Chinese, Fast Food",
        rating: 4.5
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVDY0RFXFn0pPT6B5v-0_nUnpdtewZkzTHpiB_V0r3w&s=10",
        name: "Jugaad Jn",
        cuisine: "Snacks, Deserts, Beverages",
        rating: 4.0
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5dM1Rob-gZJlatPzkAPaW98UfcH3utCsOrZIJOuC2g&s=10",
        name: "Tasty Bites",
        cuisine: "Biriyani, Chinese, North Indian",
        rating: 4.8
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3oXnEsasaKXI6uJ4gbxPAA52lEu7fxlk-FfYDrB4Ag&s=10",
        name: "Burger King",
        cuisine: "Burgers, American, Fast Food",
        rating: 4.2
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={logo}
                    alt="Cravingo Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Kart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { image, name, cuisine, rating } = props.data;
    return (
        <div className="restaurant-card" style={restaurantCard}>
            <img
                className="restaurant-image"
                src={image}
                alt={name}
            />
            <h2>{name}</h2>
            <p>{cuisine}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <div className="search-input-wrapper">
                    <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                    </svg>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search for restaurants or cuisines"
                        aria-label="Search for restaurants or cuisines"
                    />
                </div>
            </div>
            <div className="restaurant-container">
                <h2>Restaurants with online food delivery</h2>
                <div className="restaurant-list">
                    {
                        restaurantList.map(restaurant => (
                            <RestaurantCard key={restaurant.name} data={restaurant} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <h1>Heading</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
