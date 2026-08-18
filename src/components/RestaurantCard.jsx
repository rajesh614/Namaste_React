import React from "react";
import { Link } from "react-router-dom";
import { restaurantCard } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName, id } =
        props.data;

    return (
        <>
            <Link to={`/restaurant/${id}`}>
                <div className="restaurant-card" style={restaurantCard}>
                    <img
                        className="restaurant-image"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                        alt={name}
                    />
                    <h2>{name}</h2>
                    <p className="rating">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="shrink-0"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="12"
                                cy="12"
                                r="12"
                                fill={avgRating > 4.0 ? "#24963F" : "#f76d6d"}
                            />
                            <path
                                d="M12 5.5L13.91 9.37L18.18 9.99L15.09 13.01L15.82 17.26L12 15.25L8.18 17.26L8.91 13.01L5.82 9.99L10.09 9.37L12 5.5Z"
                                fill="white"
                            />
                        </svg>
                        <span>{avgRating}</span>:
                        <span>
                            <b>{sla?.slaString}</b>
                        </span>
                    </p>
                    <p className="cuisine">{cuisines?.join(", ")}</p>
                    <p className="address">{areaName}</p>
                </div>
            </Link>
        </>
    );
};

export default RestaurantCard;
