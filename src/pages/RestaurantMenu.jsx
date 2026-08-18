import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { restaurantMenu } from "../utils/mockData";
import OfferCard from "../components/OfferCard";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [resInfo, setResInfo] = useState(restaurantMenu?.data?.cards[2]?.card?.card);
    const [resDeals, setResDeals] = useState(restaurantMenu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    const [resItems, setResItems] = useState(restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    const [showTimings, setShowTimings] = useState(false);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     try {
    //         const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.344743&lng=85.80381799999999&restaurantId=${id}&submitAction=ENTER`;
    //         const response = await fetch(apiUrl);

    //         // If Swiggy returns an empty response (WAF block), the json parsing will throw an error
    //         const data = await response.json();

    //         if (data?.data?.cards?.length > 0) {
    //             setResInfo(data?.data);
    //         } else {
    //             throw new Error("Empty data received from Swiggy");
    //         }
    //     } catch (error) {
    //         console.error("Swiggy API blocked the request. Falling back to mock data:", error);
    // Fallback to mock data so you can continue the tutorial
    // setResInfo(restaurantMenu?.data?.cards[2]?.card?.card?.info);
    //     }
    // };

    return (resInfo === null ? (
        <LoadingScreen />
    ) : (
        <div className="menu-container">
            <h1>{resInfo.info.name || "Restaurant"}</h1>
            <img
                className="single-restaurant-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${resInfo.info.cloudinaryImageId}`}
                alt={resInfo.info.name}
            />
            <p className="menu-rating">
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
                        fill={resInfo.info.avgRating > 4.0 ? "#24963F" : "#f76d6d"}
                    />
                    <path
                        d="M12 5.5L13.91 9.37L18.18 9.99L15.09 13.01L15.82 17.26L12 15.25L8.18 17.26L8.91 13.01L5.82 9.99L10.09 9.37L12 5.5Z"
                        fill="white"
                    />
                </svg>
                <span>
                    {resInfo.info.avgRating} ({resInfo.info.totalRatingsString})
                </span>
                <span style={{ color: "#8f8f92ff" }}> &bull; </span>
                <span>
                    <b>{resInfo.info.costForTwoMessage}</b>
                </span>
            </p>
            <p style={{ fontSize: "13px", margin: 0, textDecoration: "underline", color: "#5468c1ff" }}>
                {resInfo.info.cuisines?.join(", ")}
            </p>
            <div style={{ position: "relative" }}>
                <p
                    style={{
                        color: resInfo.info.timingsInfo?.status === "Open now" ? "#53d070" : "#f76d6d",
                        fontSize: "13px",
                    }}>
                    {resInfo.info.timingsInfo?.status}
                    <span
                        style={{ color: "gray", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px" }}
                        onClick={() => setShowTimings(!showTimings)}
                    >
                        <span style={{ marginLeft: "10px" }}> &bull; </span>
                        {resInfo.info.timingsInfo?.status === "Open now"
                            ? ` ${resInfo.info.timingsInfo?.message}`
                            : ` ${resInfo.info.timingsInfo?.message}`}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showTimings ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginTop: "2px" }}>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </p>

                {showTimings && (
                    <div style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "8px", marginTop: "4px", fontSize: "13px", border: "1px solid #ddd", width: "100%", maxWidth: "400px", position: "absolute", top: "100%", left: 0, zIndex: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                        <h4 style={{ margin: "0 0 10px 0", borderBottom: "1px solid #eee", paddingBottom: "6px" }}>
                            Outlet timings
                        </h4>

                        {resInfo.info.timingsInfo?.outletTiming?.infoList.map((timing, index) => (
                            <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                                <span style={{ fontWeight: "600", color: timing.titleColor === "primary" ? "#f76d6d" : "#444" }}>
                                    {timing.title}
                                </span>
                                <span style={{ color: timing.subtitleColor === "primary" ? "#f76d6d" : "#777", textAlign: "right", marginLeft: "15px" }}>
                                    {timing.subtitle}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <hr style={{ margin: "24px 0", border: "none", borderBottom: "1px solid #d3d3d3" }} />

            <div className="deals-container">
                <h3>Deals for you</h3>
                <div className="deals-list">
                    {
                        resDeals?.map((deal, id) => (
                            <OfferCard key={id} deal={deal} />
                        ))
                    }
                </div>
            </div>
            <SearchBar listOfRestaurants={resInfo} setFilteredRestaurant={setResInfo} placeholder="Search Dishes" />
            <hr style={{ margin: "24px 0", border: "none", borderBottom: "1px solid #d3d3d3" }} />
            <div className="items-container">
                {console.log(resItems)}
                <h3>Recommended ({resItems?.length})</h3>
                {
                    resItems?.map((item, id) => (
                        <ItemCard key={id} item={item} />
                    ))
                }
            </div>
        </div>
    )
    );
};

export default RestaurantMenu;
