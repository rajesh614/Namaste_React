// import { useEffect, useRef, useState } from "react";
// import RestaurantCard from "./components/RestaurantCard";
// import restaurantList from "./utils/mockData";

// // Number of restaurants to load each time user scrolls to bottom
// const PAGE_SIZE = 4;

// const allRestaurants = [
//     // Spread the Map values into this new array.
//     ...new Map(
//         restaurantList.data.cards
//             .flatMap(
//                 (card) =>
//                     // Follow the nested API path to its restaurant array.
//                     // This navigates through the deeply nested structure of the API response
//                     card?.card?.card?.gridElements?.infoWithStyle
//                         // Use an empty array when this card does not contain restaurants.
//                         ?.restaurants || [],
//             )
//             // Create [id, restaurant] pairs so the ID can be used as a unique key.
//             // Map uses restaurant.info.id as the key for deduplication
//             .map((restaurant) => [restaurant.info.id, restaurant]),
//     ).values(), // Get only the restaurant objects from the Map (without IDs).
// ];

// const Test = () => {
//     // State: Track how many restaurants are currently visible (initially PAGE_SIZE = 4)
//     const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    
//     // State: Track whether data is currently being loaded (for loading animations)
//     const [isLoadingMore, setIsLoadingMore] = useState(false);
    
//     // Ref: Reference to the "load more" trigger element at bottom of page
//     const loadMoreRef = useRef(null);
    
//     // Computed: Boolean to check if there are more restaurants to load
//     const hasMore = visibleCount < allRestaurants.length;

//     useEffect(() => {
//         // Skip if no more restaurants to load or already loading
//         if (!hasMore || isLoadingMore) return;

//         // Create an Intersection Observer to detect when user scrolls to bottom
//         // IntersectionObserver watches for when an element enters the viewport
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 // If the load trigger element is NOT visible, don't do anything
//                 if (!entry.isIntersecting) return;

//                 // User scrolled to the bottom, set loading state
//                 setIsLoadingMore(true);

//                 // Simulates a paginated API request using the local mock data.
//                 // In real app, this would be an actual API call
//                 window.setTimeout(() => {
//                     // Load next batch: add PAGE_SIZE to visibleCount (but don't exceed total)
//                     setVisibleCount((count) =>
//                         Math.min(count + PAGE_SIZE, allRestaurants.length),
//                     );
//                     // Complete loading state after 500ms delay
//                     setIsLoadingMore(false);
//                 }, 500);
//             },
//             // Options: Trigger callback 200px BEFORE element enters viewport
//             // This preloads data before user actually reaches bottom
//             { rootMargin: "200px" },
//         );

//         // Get reference to the actual DOM element
//         const loaderElement = loadMoreRef.current;
        
//         // Start observing the loader element if it exists
//         if (loaderElement) observer.observe(loaderElement);

//         // Cleanup function: Stop observing when component unmounts or effect reruns
//         return () => observer.disconnect();
//     }, [hasMore, isLoadingMore]); // Rerun effect when these dependencies change

//     return (
//         <main className="test-infinite-scroll">
//             {/* Heading and description */}
//             <h1>Mock restaurant infinite scroll</h1>
//             <p>Scroll down to load more restaurants from mockData.jsx.</p>

//             {/* Restaurant list container */}
//             <div className="restaurant-list">
//                 {/* Display only the first 'visibleCount' restaurants */}
//                 {allRestaurants.slice(0, visibleCount).map((restaurant) => (
//                     // Each restaurant gets its own RestaurantCard component
//                     <RestaurantCard
//                         key={restaurant.info.id}
//                         data={restaurant.info}
//                     />
//                 ))}
//             </div>

//             {/* Load trigger element - appears at bottom, triggers loading when scrolled into view */}
//             <div className="test-load-trigger" ref={loadMoreRef}>
//                 {/* Show different messages based on loading state */}
//                 {isLoadingMore
//                     ? "Loading more restaurants..."
//                     : hasMore
//                       ? "Scroll down to load more"
//                       : "You have reached the end"}
//             </div>
//         </main>
//     );
// };

// export default Test;

const data = {
    statusCode: 0,
    data: {
        statusMessage: "done successfully",
        pageOffset: {
            nextOffset: "CJhlELQ4KIDI2Yz355C4WTCnEzgC",
            widgetOffset: {
                NewListingView_category_bar_chicletranking_TwoRows: "",
                NewListingView_category_bar_chicletranking_TwoRows_Rendition:
                    "",
                Restaurant_Group_WebView_SEO_PB_Theme: "",
                collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
                    "9",
                inlineFacetFilter: "",
                restaurantCountWidget: "",
            },
        },
        cards: [
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        header: {
                            title: "What's on your mind?",
                            headerStyling: {
                                padding: {
                                    left: 16,
                                    top: 16,
                                    bottom: 4,
                                },
                            },
                        },
                        layout: {
                            rows: 1,
                            columns: 10,
                            horizontalScrollEnabled: true,
                            itemSpacing: 24,
                            widgetPadding: {},
                            containerStyle: {
                                containerPadding: {
                                    left: 8,
                                    top: 8,
                                    right: 12,
                                    bottom: 4,
                                },
                            },
                            widgetTheme: {
                                defaultMode: {
                                    backgroundColour: "#FFFFFF",
                                    theme: "THEME_TYPE_LIGHT",
                                    themeVariant: "THEME_VARIANT_DEFAULT",
                                },
                                darkMode: {
                                    theme: "THEME_TYPE_DARK",
                                    themeVariant: "THEME_VARIANT_DEFAULT",
                                },
                            },
                        },
                        imageGridCards: {
                            info: [
                                {
                                    id: "750591",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                        text: "Biryani",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for biryani",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750581",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                                        text: "North Indian",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for north indian",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750585",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                                        text: "South Indian",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for south indian",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750587",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                                        text: "Chinese",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for chinese",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750589",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                                        text: "Burgers",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for burger",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750222",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                                        text: "Rolls",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText: "restaurants curated for roll",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750579",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                                        text: "Pizzas",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for pizza",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "749868",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                                        text: "Cakes",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText: "restaurant curated for cake",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750107",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
                                        text: "Dessert",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for dessert",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750201",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                                        text: "Paratha",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for paratha",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "749772",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                        text: "Noodles",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for noodles",
                                        altTextCta: "open",
                                    },
                                    entityId: "80463",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750131",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                                        text: "Dosa",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText: "restaurants curated for dosa",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "749760",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                        text: "Khichdi",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for khichdi",
                                        altTextCta: "open",
                                    },
                                    entityId: "80455",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750225",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                                        text: "Salad",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText: "restaurant curated for salad",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750206",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                                        text: "Pasta",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText: "restaurant curated for pasta",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750596",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                                        text: "Ice Cream",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for icecream",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "2594473",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_waffle.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/116178?collection_id=116178&tags=dessert&type=rcv2",
                                        text: "Waffle",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurants curated for waffle",
                                        altTextCta: "open",
                                    },
                                    entityId: "116178",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750248",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                                        text: "Shawarma",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for shawarma",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "749876",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                                        text: "Chole Bhature",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for chhole bhatoore",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                                {
                                    id: "750208",
                                    imageId:
                                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                                    action: {
                                        link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                                        text: "Pastry",
                                        type: "WEBLINK",
                                    },
                                    entityType: "BANNER",
                                    accessibility: {
                                        altText:
                                            "restaurant curated for Pastry",
                                        altTextCta: "open",
                                    },
                                    entityId:
                                        "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                                    frequencyCapping: {},
                                    externalMarketing: {},
                                    overlayIcon: {},
                                    footerOverlay: {
                                        title: {},
                                        subtitle: {},
                                        cta: {},
                                    },
                                },
                            ],
                            style: {
                                width: {
                                    type: "TYPE_RELATIVE",
                                    value: 0.2941,
                                    reference:
                                        "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                                },
                                height: {
                                    type: "TYPE_RELATIVE",
                                    value: 1.2444,
                                    reference:
                                        "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                                },
                            },
                        },
                        id: "whats_on_your_mind",
                        gridElements: {
                            infoWithStyle: {
                                "@type":
                                    "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                info: [
                                    {
                                        id: "750591",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                            text: "Biryani",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for biryani",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750581",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                                            text: "North Indian",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for north indian",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750585",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                                            text: "South Indian",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for south indian",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750587",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                                            text: "Chinese",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for chinese",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750589",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                                            text: "Burgers",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for burger",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750222",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                                            text: "Rolls",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for roll",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750579",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                                            text: "Pizzas",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for pizza",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "749868",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                                            text: "Cakes",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for cake",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750107",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
                                            text: "Dessert",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for dessert",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750201",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                                            text: "Paratha",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for paratha",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "749772",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                            text: "Noodles",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for noodles",
                                            altTextCta: "open",
                                        },
                                        entityId: "80463",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750131",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                                            text: "Dosa",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for dosa",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "749760",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                            text: "Khichdi",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for khichdi",
                                            altTextCta: "open",
                                        },
                                        entityId: "80455",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750225",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                                            text: "Salad",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for salad",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750206",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                                            text: "Pasta",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for pasta",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750596",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                                            text: "Ice Cream",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for icecream",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "2594473",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_waffle.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/116178?collection_id=116178&tags=dessert&type=rcv2",
                                            text: "Waffle",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurants curated for waffle",
                                            altTextCta: "open",
                                        },
                                        entityId: "116178",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750248",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                                            text: "Shawarma",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for shawarma",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "749876",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                                            text: "Chole Bhature",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for chhole bhatoore",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                    {
                                        id: "750208",
                                        imageId:
                                            "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                                        action: {
                                            link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                                            text: "Pastry",
                                            type: "WEBLINK",
                                        },
                                        entityType: "BANNER",
                                        accessibility: {
                                            altText:
                                                "restaurant curated for Pastry",
                                            altTextCta: "open",
                                        },
                                        entityId:
                                            "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                                        frequencyCapping: {},
                                        externalMarketing: {},
                                        overlayIcon: {},
                                        footerOverlay: {
                                            title: {},
                                            subtitle: {},
                                            cta: {},
                                        },
                                    },
                                ],
                                style: {
                                    width: {
                                        type: "TYPE_RELATIVE",
                                        value: 0.2941,
                                        reference:
                                            "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                                    },
                                    height: {
                                        type: "TYPE_RELATIVE",
                                        value: 1.2444,
                                        reference:
                                            "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        header: {
                            title: "Top restaurant chains in Bhubaneswar",
                            action: {},
                            headerStyling: {
                                padding: {
                                    left: 16,
                                    top: 28,
                                    bottom: 18,
                                },
                            },
                        },
                        layout: {
                            rows: 1,
                            columns: 20,
                            horizontalScrollEnabled: true,
                            itemSpacing: 32,
                            widgetPadding: {},
                            containerStyle: {
                                containerPadding: {
                                    left: 16,
                                    right: 12,
                                    bottom: 12,
                                },
                            },
                            scrollBar: {
                                scrollThumbColor: "#E46D47",
                                scrollTrackColor: "#02060C",
                                width: 54,
                                height: 4,
                                scrollStyling: {
                                    padding: {
                                        top: 6,
                                        bottom: 24,
                                    },
                                },
                            },
                            widgetTheme: {
                                defaultMode: {
                                    backgroundColour: "#1B3028",
                                    theme: "THEME_TYPE_DARK",
                                    themeVariant: "THEME_VARIANT_DEFAULT",
                                },
                                darkMode: {
                                    backgroundColour: "#1B3028",
                                    theme: "THEME_TYPE_DARK",
                                    themeVariant: "THEME_VARIANT_DEFAULT",
                                },
                            },
                        },
                        id: "top_brands_for_you",
                        gridElements: {
                            infoWithStyle: {
                                "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                restaurants: [
                                    {
                                        info: {
                                            id: "408175",
                                            name: "Pizza Hut",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/3746afa5-6b29-4d55-9db6-15dc93b7b9e3_408175.JPG",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹300 for two",
                                            cuisines: ["Pizzas"],
                                            avgRating: 4.4,
                                            parentId: "721",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "7.3K+",
                                            sla: {
                                                deliveryTime: 28,
                                                lastMileTravel: 3.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "3.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 04:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                        description:
                                                            "Top-rated for Pizza, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Pizza, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.2",
                                                    ratingCount: "886",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/pizza-hut-patia-rest408175",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "305807",
                                            name: "Barbeque Nation",
                                            cloudinaryImageId:
                                                "pocpd4knzgptsuguulhv",
                                            locality: "Chandrasekharpur",
                                            areaName: "Chandrasekharpur",
                                            costForTwo: "₹600 for two",
                                            cuisines: [
                                                "North Indian",
                                                "Barbecue",
                                                "Kebabs",
                                                "Biryani",
                                                "Street Food",
                                                "Snacks",
                                            ],
                                            avgRating: 4.1,
                                            parentId: "2438",
                                            avgRatingString: "4.1",
                                            totalRatingsString: "4.4K+",
                                            sla: {
                                                deliveryTime: 33,
                                                lastMileTravel: 5.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "30-40 mins",
                                                lastMileTravelString: "5.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "70% OFF",
                                                subHeader: "UPTO ₹130",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.4",
                                                    ratingCount: "13K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/barbeque-nation-chandrasekharpur-rest305807",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "639471",
                                            name: "Dum Safar Biryani",
                                            cloudinaryImageId:
                                                "1154cffac2453eb0bf7fdda7e5ea1659",
                                            locality: "Sachivalay Marg",
                                            areaName: "3PELX MALL",
                                            costForTwo: "₹500 for two",
                                            cuisines: [
                                                "Biryani",
                                                "Hyderabadi",
                                                "Kebabs",
                                                "North Indian",
                                                "barbeque",
                                            ],
                                            avgRating: 4,
                                            parentId: "351013",
                                            avgRatingString: "4.0",
                                            totalRatingsString: "2.3K+",
                                            sla: {
                                                deliveryTime: 33,
                                                lastMileTravel: 5.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "30-35 mins",
                                                lastMileTravelString: "5.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "60% OFF",
                                                subHeader: "UPTO ₹120",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/dum-safar-biryani-sachivalay-marg-3pelx-mall-rest639471",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "85777",
                                            name: "Hotel Maharaja and Fast Food",
                                            cloudinaryImageId:
                                                "oapbfe5a3ftryfzjxr7u",
                                            locality: "Hb Colony",
                                            areaName: "Baramunda",
                                            costForTwo: "₹250 for two",
                                            cuisines: [
                                                "Indian",
                                                "Chinese",
                                                "Tandoor",
                                                "Biryani",
                                            ],
                                            avgRating: 4,
                                            parentId: "100050",
                                            avgRatingString: "4.0",
                                            totalRatingsString: "93K+",
                                            sla: {
                                                deliveryTime: 36,
                                                lastMileTravel: 10.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "35-40 mins",
                                                lastMileTravelString: "10.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 15:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "70% OFF",
                                                subHeader: "UPTO ₹140",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/hotel-maharaja-and-fast-food-hb-colony-baramunda-rest85777",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "533219",
                                            name: "Goila Butter Chicken",
                                            cloudinaryImageId:
                                                "2acf0681a049dea7dac7271cf7ccc560",
                                            locality: "Chandrasekharpur",
                                            areaName: "Prachi Enclave Rd",
                                            costForTwo: "₹600 for two",
                                            cuisines: [
                                                "North Indian",
                                                "Biryani",
                                                "Kebabs",
                                                "Desserts",
                                            ],
                                            avgRating: 4.3,
                                            parentId: "322587",
                                            avgRatingString: "4.3",
                                            totalRatingsString: "3.9K+",
                                            sla: {
                                                deliveryTime: 29,
                                                lastMileTravel: 4.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "4.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:59:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId: "newg.png",
                                                        description:
                                                            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                                    imageId:
                                                                        "newg.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹149",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/goila-butter-chicken-chandrasekharpur-prachi-enclave-rd-rest533219",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "548192",
                                            name: "Bikkgane Biryani",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/bc462aea-a87e-424d-a84f-11ba768b3194_548192.JPG",
                                            locality: "DISTRICT CENTER",
                                            areaName: "Chandrashekarpur",
                                            costForTwo: "₹350 for two",
                                            cuisines: [
                                                "Biryani",
                                                " Hyderabadi",
                                                " Andhra",
                                                " Lucknowi",
                                                " Kolkata",
                                                " Desserts",
                                                "Beverages",
                                            ],
                                            avgRating: 4.5,
                                            parentId: "5070",
                                            avgRatingString: "4.5",
                                            totalRatingsString: "20K+",
                                            sla: {
                                                deliveryTime: 24,
                                                lastMileTravel: 4.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "4.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 04:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                        description:
                                                            "Top-rated for Biryani, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                        description:
                                                            "Top-rated for Corporate, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Biryani, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Corporate, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/bikkgane-biryani-district-center-chandrashekarpur-rest548192",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "103530",
                                            name: "The Belgian Waffle Co.",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d13eee70-5eff-40cf-ac69-c9f5fbefe41a_103530.JPG",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹200 for two",
                                            cuisines: [
                                                "Waffle",
                                                "Desserts",
                                                "Ice Cream",
                                                "Beverages",
                                            ],
                                            avgRating: 4.8,
                                            veg: true,
                                            parentId: "2233",
                                            avgRatingString: "4.8",
                                            totalRatingsString: "5.9K+",
                                            sla: {
                                                deliveryTime: 28,
                                                lastMileTravel: 4.3,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "4.3 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 02:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                textExtendedBadges: [
                                                    {
                                                        iconId: "Ratnesh_Badges/test2.png",
                                                        shortDescription:
                                                            "Perfect ice cream delivery",
                                                        fontColor: "#7E808C",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "",
                                                                    fontColor:
                                                                        "#7E808C",
                                                                    iconId: "Ratnesh_Badges/test2.png",
                                                                    shortDescription:
                                                                        "Perfect ice cream delivery",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {},
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.3",
                                                    ratingCount: "31",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/the-belgian-waffle-co-patia-rest103530",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "244438",
                                            name: "Wow! Momo",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/05591e30-80d4-4923-ae3e-b91d7c79f65a_244438.JPG",
                                            locality: "Infocity Squre",
                                            areaName: "Patia",
                                            costForTwo: "₹300 for two",
                                            cuisines: [
                                                "Momos",
                                                "Chinese",
                                                "fastfood",
                                                "Asian",
                                                "Beverages",
                                            ],
                                            avgRating: 4.4,
                                            parentId: "1776",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "5.6K+",
                                            sla: {
                                                deliveryTime: 22,
                                                lastMileTravel: 1.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "1.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 01:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                                        description:
                                                            "Top-rated for Chinese, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                                        description:
                                                            "Top-rated for Momo, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "Rxawards/_CATEGORY-Chinese.png",
                                                        description:
                                                            "Top-rated for Chinese, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Chinese, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Momo, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Chinese, based on user votes.",
                                                                    imageId:
                                                                        "Rxawards/_CATEGORY-Chinese.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹99",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.0",
                                                    ratingCount: "360",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/wow-momo-infocity-squre-patia-rest244438",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "338648",
                                            name: "KFC",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/323d2ed1-6c40-4fc0-8298-df8a85362217_338648.JPG",
                                            locality:
                                                "Chandaka Industrial Area",
                                            areaName: "Patia",
                                            costForTwo: "₹400 for two",
                                            cuisines: [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps",
                                            ],
                                            avgRating: 4.4,
                                            parentId: "547",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "14K+",
                                            sla: {
                                                deliveryTime: 21,
                                                lastMileTravel: 3.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "3.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 03:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        description:
                                                            "Top-rated for Burger, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                        description:
                                                            "Top-rated for Corporate, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Burger, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Corporate, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/kfc-chandaka-industrial-area-patia-rest338648",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "92292",
                                            name: "Burger King",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/aa8cfa87-76b7-4709-bc89-c4da8f517800_92292.jpg",
                                            locality: "KIIT Square",
                                            areaName: "Patia",
                                            costForTwo: "₹350 for two",
                                            cuisines: ["Burgers", "American"],
                                            avgRating: 4.6,
                                            parentId: "166",
                                            avgRatingString: "4.6",
                                            totalRatingsString: "62K+",
                                            sla: {
                                                deliveryTime: 19,
                                                lastMileTravel: 4.3,
                                                serviceability: "SERVICEABLE",
                                                slaString: "15-20 mins",
                                                lastMileTravelString: "4.3 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 02:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                        description:
                                                            "Top-rated for Bolt, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        description:
                                                            "Top-rated for Burger, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                        description:
                                                            "Top-rated for Corporate, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Bolt, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Burger, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Corporate, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹59",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.4",
                                                    ratingCount: "4.0K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/burger-king-kiit-square-patia-rest92292",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "187738",
                                            name: "hotel Toshali",
                                            cloudinaryImageId:
                                                "qhep96bo9cw7zskizcr0",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹250 for two",
                                            cuisines: [
                                                "Chinese",
                                                "Indian",
                                                "Thalis",
                                            ],
                                            avgRating: 4.3,
                                            parentId: "103111",
                                            avgRatingString: "4.3",
                                            totalRatingsString: "18K+",
                                            sla: {
                                                deliveryTime: 32,
                                                lastMileTravel: 3.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "30-35 mins",
                                                lastMileTravelString: "3.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:00:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹39",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.2",
                                                    ratingCount: "1.2K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/hotel-toshali-patia-rest187738",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "446806",
                                            name: "Shravan Specials by Lunchbox",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/29/9ef20db4-0d1d-4aa7-9821-68ac00a94656_446806.JPG",
                                            locality: "Technology Corridor Rd",
                                            areaName: "Patia",
                                            costForTwo: "₹200 for two",
                                            cuisines: [
                                                "Biryani",
                                                "North Indian",
                                                "Desserts",
                                                "Beverages",
                                            ],
                                            avgRating: 4.3,
                                            veg: true,
                                            parentId: "21938",
                                            avgRatingString: "4.3",
                                            totalRatingsString: "968",
                                            sla: {
                                                deliveryTime: 21,
                                                lastMileTravel: 1.9,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "1.9 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 03:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "v1695133679/badges/Pure_Veg111.png",
                                                        description:
                                                            "Serves only 100% vegetarian food, with no non-veg items.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Serves only 100% vegetarian food, with no non-veg items.",
                                                                    imageId:
                                                                        "v1695133679/badges/Pure_Veg111.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹79",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/shravan-specials-by-lunchbox-technology-corridor-rd-patia-rest446806",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "262280",
                                            name: "Biryani By Kilo",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/28/3248dc64-76ed-4e37-b141-7efb26a9fa1d_262280.jpg",
                                            locality: "Chandrasekharpur",
                                            areaName: "Chandrasekharpur",
                                            costForTwo: "₹499 for two",
                                            cuisines: [
                                                "Biryani",
                                                "Hyderabadi",
                                                "North Indian",
                                                "Kebabs",
                                                "Mughlai",
                                                "Desserts",
                                            ],
                                            avgRating: 4.2,
                                            parentId: "130",
                                            avgRatingString: "4.2",
                                            totalRatingsString: "13K+",
                                            sla: {
                                                deliveryTime: 35,
                                                lastMileTravel: 4.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "35-45 mins",
                                                lastMileTravelString: "4.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:59:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                        description:
                                                            "Top-rated for Biryani, based on user votes.",
                                                    },
                                                    {
                                                        imageId: "newg.png",
                                                        description:
                                                            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Biryani, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                                    imageId:
                                                                        "newg.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹149",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "3.8",
                                                    ratingCount: "938",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/biryani-by-kilo-chandrasekharpur-rest262280",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "413322",
                                            name: "NIC Ice Creams",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/dac5d999-f49c-496a-a27e-ae894f8d401b_413322.JPG",
                                            locality: "Infosys Road",
                                            areaName: "Patia",
                                            costForTwo: "₹120 for two",
                                            cuisines: ["Ice Cream", "Desserts"],
                                            avgRating: 4.7,
                                            veg: true,
                                            parentId: "6249",
                                            avgRatingString: "4.7",
                                            totalRatingsString: "5.0K+",
                                            sla: {
                                                deliveryTime: 13,
                                                lastMileTravel: 2.2,
                                                serviceability: "SERVICEABLE",
                                                slaString: "10-15 mins",
                                                lastMileTravelString: "2.2 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 00:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                                        description:
                                                            "Top-rated for Ice Cream, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Ice Cream, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "65% OFF",
                                                subHeader: "UPTO ₹130",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/nic-ice-creams-infosys-road-patia-rest413322",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "465090",
                                            name: "Arabikaas Arabian Restaurant",
                                            cloudinaryImageId:
                                                "f3664e1d029dce22d9dca992857e3e8e",
                                            locality: "Kiit Road",
                                            areaName: "Patia",
                                            costForTwo: "₹500 for two",
                                            cuisines: [
                                                "Arabian",
                                                "Chinese",
                                                "Tandoor",
                                                "Indian",
                                            ],
                                            avgRating: 4.6,
                                            parentId: "279214",
                                            avgRatingString: "4.6",
                                            totalRatingsString: "3.1K+",
                                            sla: {
                                                deliveryTime: 27,
                                                lastMileTravel: 3.5,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "3.5 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 16:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId: "newg.png",
                                                        description:
                                                            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                                    imageId:
                                                                        "newg.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/arabikaas-arabian-restaurant-kiit-road-patia-rest465090",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "72589",
                                            name: "Jugaad Jn",
                                            cloudinaryImageId:
                                                "fq1uss75jajmt1oueyla",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹150 for two",
                                            cuisines: [
                                                "Snacks",
                                                "Beverages",
                                                "Desserts",
                                                "Sweets",
                                            ],
                                            avgRating: 4.5,
                                            veg: true,
                                            parentId: "9963",
                                            avgRatingString: "4.5",
                                            totalRatingsString: "44K+",
                                            sla: {
                                                deliveryTime: 23,
                                                lastMileTravel: 4,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "4.0 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 22:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                        description:
                                                            "Top-rated for North Indian, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                        description:
                                                            "Top-rated among Local Gems, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for North Indian, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated among Local Gems, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "10% OFF",
                                                subHeader: "ABOVE ₹159",
                                                discountTag: "FLAT DEAL",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.2",
                                                    ratingCount: "4.1K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/jugaad-jn-patia-rest72589",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "71131",
                                            name: "Biriyani Box",
                                            cloudinaryImageId:
                                                "qmr0hzgrzn59dkddkpvj",
                                            locality: "Patia",
                                            areaName: "Chandrasekharpur",
                                            costForTwo: "₹200 for two",
                                            cuisines: [
                                                "Biryani",
                                                "Kebabs",
                                                "Desserts",
                                                "Indian",
                                            ],
                                            avgRating: 4.3,
                                            parentId: "7279",
                                            avgRatingString: "4.3",
                                            totalRatingsString: "46K+",
                                            sla: {
                                                deliveryTime: 27,
                                                lastMileTravel: 4.1,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "4.1 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 01:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                        description:
                                                            "Top-rated for Biryani, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                        description:
                                                            "Top-rated for Bolt, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                        description:
                                                            "Top-rated among Local Gems, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Biryani, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Bolt, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated among Local Gems, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "60% OFF",
                                                subHeader: "UPTO ₹120",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "3.9",
                                                    ratingCount: "4.1K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/biriyani-box-patia-chandrasekharpur-rest71131",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "71133",
                                            name: "Tandoori Wala",
                                            cloudinaryImageId:
                                                "j2me2vt01cju21r5v7vg",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹500 for two",
                                            cuisines: ["Indian", "Mughlai"],
                                            avgRating: 4.6,
                                            parentId: "8897",
                                            avgRatingString: "4.6",
                                            totalRatingsString: "4.9K+",
                                            sla: {
                                                deliveryTime: 24,
                                                lastMileTravel: 2.5,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "2.5 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 15:45:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹99",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.1",
                                                    ratingCount: "3.7K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/tandoori-wala-patia-rest71133",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "621140",
                                            name: "McDonald's",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4769cebe-e54d-473d-a5a5-cbb3fdb043e0_621140.JPG",
                                            locality: "Chandrasekharpur",
                                            areaName: "Chandrasekharpur",
                                            costForTwo: "₹400 for two",
                                            cuisines: [
                                                "American",
                                                "Fast Food",
                                                "Beverages",
                                            ],
                                            avgRating: 4.6,
                                            parentId: "630",
                                            avgRatingString: "4.6",
                                            totalRatingsString: "13K+",
                                            sla: {
                                                deliveryTime: 21,
                                                lastMileTravel: 2.5,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "2.5 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 02:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        description:
                                                            "Top-rated for Burger, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Burger, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹52",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.3",
                                                    ratingCount: "2.9K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/mcdonalds-chandrasekharpur-rest621140",
                                            type: "WEBLINK",
                                        },
                                    },
                                    {
                                        info: {
                                            id: "74269",
                                            name: "GreenChillyz",
                                            cloudinaryImageId:
                                                "gcquif3ytdij3xikweyr",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹200 for two",
                                            cuisines: ["Indian", "Chinese"],
                                            avgRating: 4.4,
                                            parentId: "399293",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "14K+",
                                            sla: {
                                                deliveryTime: 18,
                                                lastMileTravel: 2.8,
                                                serviceability: "SERVICEABLE",
                                                slaString: "15-20 mins",
                                                lastMileTravelString: "2.8 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 22:30:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                        description:
                                                            "Top-rated among Local Gems, based on user votes.",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                                        description:
                                                            "Top-rated for Rolls, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated among Local Gems, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Rolls, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹49",
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.2",
                                                    ratingCount: "2.8K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/greenchillyz-patia-rest74269",
                                            type: "WEBLINK",
                                        },
                                    },
                                ],
                                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                                style: {
                                    width: {
                                        type: "TYPE_RELATIVE",
                                        value: 0.41111112,
                                        reference:
                                            "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                                    },
                                    height: {
                                        type: "TYPE_RELATIVE",
                                        value: 0.7027027,
                                        reference:
                                            "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                                    },
                                    layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                                },
                                collectionId: "84124",
                            },
                        },
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
                        title: "Restaurants with online food delivery in Bhubaneswar",
                        id: "popular_restaurants_title",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                        sortConfigs: [
                            {
                                key: "relevance",
                                title: "Relevance (Default)",
                                selected: true,
                                defaultSelection: true,
                            },
                            {
                                key: "deliveryTimeAsc",
                                title: "Delivery Time",
                            },
                            {
                                key: "modelBasedRatingDesc",
                                title: "Rating",
                            },
                            {
                                key: "costForTwoAsc",
                                title: "Cost: Low to High",
                            },
                            {
                                key: "costForTwoDesc",
                                title: "Cost: High to Low",
                            },
                        ],
                        restaurantCount: 1671,
                        widgetId: "inlineFacetFilter",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        layout: {
                            columns: 4,
                        },
                        id: "restaurant_grid_listing_v2",
                        gridElements: {
                            infoWithStyle: {
                                "@type":
                                    "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
                                restaurants: [
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "408175",
                                            name: "Pizza Hut",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/3746afa5-6b29-4d55-9db6-15dc93b7b9e3_408175.JPG",
                                            locality: "Patia",
                                            areaName: "Patia",
                                            costForTwo: "₹300 for two",
                                            cuisines: ["Pizzas"],
                                            avgRating: 4.4,
                                            parentId: "721",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "7.3K+",
                                            sla: {
                                                deliveryTime: 28,
                                                lastMileTravel: 3.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "3.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 04:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                        description:
                                                            "Top-rated for Pizza, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Pizza, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.2",
                                                    ratingCount: "886",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/pizza-hut-patia-rest408175",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "305807",
                                            name: "Barbeque Nation",
                                            cloudinaryImageId:
                                                "pocpd4knzgptsuguulhv",
                                            locality: "Chandrasekharpur",
                                            areaName: "Chandrasekharpur",
                                            costForTwo: "₹600 for two",
                                            cuisines: [
                                                "North Indian",
                                                "Barbecue",
                                                "Kebabs",
                                                "Biryani",
                                                "Street Food",
                                                "Snacks",
                                            ],
                                            avgRating: 4.1,
                                            parentId: "2438",
                                            avgRatingString: "4.1",
                                            totalRatingsString: "4.4K+",
                                            sla: {
                                                deliveryTime: 33,
                                                lastMileTravel: 5.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "30-40 mins",
                                                lastMileTravelString: "5.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "70% OFF",
                                                subHeader: "UPTO ₹130",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "4.4",
                                                    ratingCount: "13K+",
                                                },
                                                source: "GOOGLE",
                                                sourceIconImageId:
                                                    "v1704440323/google_ratings/rating_google_tag",
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/barbeque-nation-chandrasekharpur-rest305807",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "639471",
                                            name: "Dum Safar Biryani",
                                            cloudinaryImageId:
                                                "1154cffac2453eb0bf7fdda7e5ea1659",
                                            locality: "Sachivalay Marg",
                                            areaName: "3PELX MALL",
                                            costForTwo: "₹500 for two",
                                            cuisines: [
                                                "Biryani",
                                                "Hyderabadi",
                                                "Kebabs",
                                                "North Indian",
                                                "barbeque",
                                            ],
                                            avgRating: 4,
                                            parentId: "351013",
                                            avgRatingString: "4.0",
                                            totalRatingsString: "2.3K+",
                                            sla: {
                                                deliveryTime: 33,
                                                lastMileTravel: 5.6,
                                                serviceability: "SERVICEABLE",
                                                slaString: "30-35 mins",
                                                lastMileTravelString: "5.6 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "60% OFF",
                                                subHeader: "UPTO ₹120",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/dum-safar-biryani-sachivalay-marg-3pelx-mall-rest639471",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "85777",
                                            name: "Hotel Maharaja and Fast Food",
                                            cloudinaryImageId:
                                                "oapbfe5a3ftryfzjxr7u",
                                            locality: "Hb Colony",
                                            areaName: "Baramunda",
                                            costForTwo: "₹250 for two",
                                            cuisines: [
                                                "Indian",
                                                "Chinese",
                                                "Tandoor",
                                                "Biryani",
                                            ],
                                            avgRating: 4,
                                            parentId: "100050",
                                            avgRatingString: "4.0",
                                            totalRatingsString: "93K+",
                                            sla: {
                                                deliveryTime: 36,
                                                lastMileTravel: 10.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "35-40 mins",
                                                lastMileTravelString: "10.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 15:30:00",
                                                opened: true,
                                            },
                                            badges: {},
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {},
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "70% OFF",
                                                subHeader: "UPTO ₹140",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/hotel-maharaja-and-fast-food-hb-colony-baramunda-rest85777",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "533219",
                                            name: "Goila Butter Chicken",
                                            cloudinaryImageId:
                                                "2acf0681a049dea7dac7271cf7ccc560",
                                            locality: "Chandrasekharpur",
                                            areaName: "Prachi Enclave Rd",
                                            costForTwo: "₹600 for two",
                                            cuisines: [
                                                "North Indian",
                                                "Biryani",
                                                "Kebabs",
                                                "Desserts",
                                            ],
                                            avgRating: 4.3,
                                            parentId: "322587",
                                            avgRatingString: "4.3",
                                            totalRatingsString: "3.9K+",
                                            sla: {
                                                deliveryTime: 29,
                                                lastMileTravel: 4.7,
                                                serviceability: "SERVICEABLE",
                                                slaString: "25-30 mins",
                                                lastMileTravelString: "4.7 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-17 23:59:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId: "newg.png",
                                                        description:
                                                            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                                    imageId:
                                                                        "newg.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹149",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/goila-butter-chicken-chandrasekharpur-prachi-enclave-rd-rest533219",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "1030959",
                                            name: "Thalaiva Biryani",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/8a55e356-1cd8-4104-b4c2-396e088ee058_1030959.JPG",
                                            locality: "Technology Corridor Rd",
                                            areaName: "Patia",
                                            costForTwo: "₹400 for two",
                                            cuisines: [
                                                "Biryani",
                                                "Mughlai",
                                                "Lucknowi",
                                                "Hyderabadi",
                                                "Kebabs",
                                                "Desserts",
                                                "Beverages",
                                            ],
                                            avgRating: 4.1,
                                            parentId: "582792",
                                            avgRatingString: "4.1",
                                            totalRatingsString: "780",
                                            sla: {
                                                deliveryTime: 19,
                                                lastMileTravel: 1.9,
                                                serviceability: "SERVICEABLE",
                                                slaString: "15-20 mins",
                                                lastMileTravelString: "1.9 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 03:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                                                        description:
                                                            "Top-rated for Mughlai, based on user votes.",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Top-rated for Mughlai, based on user votes.",
                                                                    imageId:
                                                                        "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/thalaiva-biryani-technology-corridor-rd-patia-rest1030959",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "1053977",
                                            name: "Truth Bowl",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/2/c71a6bdb-a069-4081-a12b-ff57a53ad783_1053977.JPG",
                                            locality: "Technology Corridor Rd",
                                            areaName: "Patia",
                                            costForTwo: "₹200 for two",
                                            cuisines: [
                                                "North Indian",
                                                "High Protein",
                                                "Biryani",
                                            ],
                                            avgRating: 4.4,
                                            parentId: "612552",
                                            avgRatingString: "4.4",
                                            totalRatingsString: "833",
                                            sla: {
                                                deliveryTime: 18,
                                                lastMileTravel: 1.9,
                                                serviceability: "SERVICEABLE",
                                                slaString: "15-20 mins",
                                                lastMileTravelString: "1.9 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 03:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "Health%20Hub/RX%20BADGE/BADGE2.png",
                                                        description:
                                                            "Meals with high protein, low calorie and no added sugar",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Meals with high protein, low calorie and no added sugar",
                                                                    imageId:
                                                                        "Health%20Hub/RX%20BADGE/BADGE2.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "50% OFF",
                                                discountTag: "FLAT DEAL",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/truth-bowl-technology-corridor-rd-patia-rest1053977",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                    {
                                        "@type":
                                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        info: {
                                            id: "1054325",
                                            name: "Dabba & Co.",
                                            cloudinaryImageId:
                                                "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/7ed9bd1d-7cff-42c9-967a-9acd2e0a1227_1054325.jpg",
                                            locality: "Technology Corridor Rd",
                                            areaName: "Patia",
                                            costForTwo: "₹200 for two",
                                            cuisines: [
                                                "Home food",
                                                "Indian",
                                                "Thalis",
                                            ],
                                            avgRating: 4.1,
                                            parentId: "612560",
                                            avgRatingString: "4.1",
                                            totalRatingsString: "811",
                                            sla: {
                                                deliveryTime: 21,
                                                lastMileTravel: 1.9,
                                                serviceability: "SERVICEABLE",
                                                slaString: "20-25 mins",
                                                lastMileTravelString: "1.9 km",
                                                iconType: "ICON_TYPE_EMPTY",
                                            },
                                            availability: {
                                                nextCloseTime:
                                                    "2026-08-18 03:00:00",
                                                opened: true,
                                            },
                                            badges: {
                                                imageBadges: [
                                                    {
                                                        imageId:
                                                            "android/static-assets/icons/big_rx.png",
                                                        description: "bolt!",
                                                    },
                                                    {
                                                        imageId:
                                                            "Health%20Hub/RX%20BADGE/BADGE2.png",
                                                        description:
                                                            "Meals with high protein, low calorie and no added sugar",
                                                    },
                                                ],
                                            },
                                            isOpen: true,
                                            type: "F",
                                            badgesV2: {
                                                entityBadges: {
                                                    imageBased: {
                                                        badgeObject: [
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "bolt!",
                                                                    imageId:
                                                                        "android/static-assets/icons/big_rx.png",
                                                                },
                                                            },
                                                            {
                                                                attributes: {
                                                                    description:
                                                                        "Meals with high protein, low calorie and no added sugar",
                                                                    imageId:
                                                                        "Health%20Hub/RX%20BADGE/BADGE2.png",
                                                                    theme: "",
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    textBased: {},
                                                    textExtendedBadges: {},
                                                },
                                            },
                                            aggregatedDiscountInfoV3: {
                                                header: "ITEMS",
                                                subHeader: "AT ₹79",
                                            },
                                            orderabilityCommunication: {
                                                title: {},
                                                subTitle: {},
                                                message: {},
                                                customIcon: {},
                                            },
                                            differentiatedUi: {
                                                displayType:
                                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                differentiatedUiMediaDetails: {
                                                    mediaType:
                                                        "ADS_MEDIA_ENUM_IMAGE",
                                                    lottie: {},
                                                    video: {},
                                                },
                                            },
                                            reviewsSummary: {},
                                            displayType:
                                                "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            restaurantOfferPresentationInfo: {},
                                            externalRatings: {
                                                aggregatedRating: {
                                                    rating: "--",
                                                },
                                            },
                                            ratingsDisplayPreference:
                                                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                        },
                                        analytics: {
                                            context:
                                                "seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5",
                                        },
                                        cta: {
                                            link: "https://www.swiggy.com/city/bhubaneswar/dabba-and-co-technology-corridor-rd-patia-rest1054325",
                                            text: "RESTAURANT_MENU",
                                            type: "WEBLINK",
                                        },
                                        widgetId:
                                            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                                    },
                                ],
                                theme: "SeoRestaurantListingGridWidget",
                            },
                        },
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
                        message: "Show More",
                        id: "show_more_button",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        title: "Best Places to Eat Across Cities",
                        brands: [
                            {
                                text: "Best Restaurants in Bangalore",
                                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Pune",
                                link: "https://www.swiggy.com/city/pune/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Mumbai",
                                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Delhi",
                                link: "https://www.swiggy.com/city/delhi/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Hyderabad",
                                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Kolkata",
                                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Chennai",
                                link: "https://www.swiggy.com/city/chennai/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Chandigarh",
                                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Ahmedabad",
                                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Jaipur",
                                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Nagpur",
                                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Bhubaneswar",
                                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Kochi",
                                link: "https://www.swiggy.com/city/kochi/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Surat",
                                link: "https://www.swiggy.com/city/surat/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Dehradun",
                                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Ludhiana",
                                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Patna",
                                link: "https://www.swiggy.com/city/patna/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Mangaluru",
                                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Bhopal",
                                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Gurgaon",
                                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Coimbatore",
                                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Agra",
                                link: "https://www.swiggy.com/city/agra/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Noida",
                                link: "https://www.swiggy.com/city/noida/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Vijayawada",
                                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Guwahati",
                                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Mysore",
                                link: "https://www.swiggy.com/city/mysore/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Pondicherry",
                                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Thiruvananthapuram",
                                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Ranchi",
                                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Vizag",
                                link: "https://www.swiggy.com/city/vizag/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Udaipur",
                                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
                            },
                            {
                                text: "Best Restaurants in Vadodara",
                                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
                            },
                        ],
                        id: "restaurant_near_me_links",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        title: "Best Cuisines Near Me",
                        brands: [
                            {
                                text: "Chinese Restaurant Near Me",
                                link: "https://www.swiggy.com/chinese-restaurants-near-me",
                            },
                            {
                                text: "South Indian Restaurant Near Me",
                                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
                            },
                            {
                                text: "Indian Restaurant Near Me",
                                link: "https://www.swiggy.com/indian-restaurants-near-me",
                            },
                            {
                                text: "Kerala Restaurant Near Me",
                                link: "https://www.swiggy.com/kerala-restaurants-near-me",
                            },
                            {
                                text: "Korean Restaurant Near Me",
                                link: "https://www.swiggy.com/korean-restaurants-near-me",
                            },
                            {
                                text: "North Indian Restaurant Near Me",
                                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
                            },
                            {
                                text: "Seafood Restaurant Near Me",
                                link: "https://www.swiggy.com/seafood-restaurants-near-me",
                            },
                            {
                                text: "Bengali Restaurant Near Me",
                                link: "https://www.swiggy.com/bengali-restaurants-near-me",
                            },
                            {
                                text: "Punjabi Restaurant Near Me",
                                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
                            },
                            {
                                text: "Italian Restaurant Near Me",
                                link: "https://www.swiggy.com/italian-restaurants-near-me",
                            },
                            {
                                text: "Andhra Restaurant Near Me",
                                link: "https://www.swiggy.com/andhra-restaurants-near-me",
                            },
                            {
                                text: "Biryani Restaurant Near Me",
                                link: "https://www.swiggy.com/biryani-restaurants-near-me",
                            },
                            {
                                text: "Japanese Restaurant Near Me",
                                link: "https://www.swiggy.com/japanese-restaurants-near-me",
                            },
                            {
                                text: "Arabian Restaurant Near Me",
                                link: "https://www.swiggy.com/arabian-restaurants-near-me",
                            },
                            {
                                text: "Fast Food Restaurant Near Me",
                                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
                            },
                            {
                                text: "Jain Restaurant Near Me",
                                link: "https://www.swiggy.com/jain-restaurants-near-me",
                            },
                            {
                                text: "Gujarati Restaurant Near Me",
                                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
                            },
                            {
                                text: "Thai Restaurant Near Me",
                                link: "https://www.swiggy.com/thai-restaurants-near-me",
                            },
                            {
                                text: "Pizzas Restaurant Near Me",
                                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
                            },
                            {
                                text: "Asian Restaurant Near Me",
                                link: "https://www.swiggy.com/asian-restaurants-near-me",
                            },
                            {
                                text: "Cafe Restaurant Near Me",
                                link: "https://www.swiggy.com/cafe-restaurants-near-me",
                            },
                            {
                                text: "Continental Restaurant Near Me",
                                link: "https://www.swiggy.com/continental-restaurants-near-me",
                            },
                            {
                                text: "Mexican Restaurant Near Me",
                                link: "https://www.swiggy.com/mexican-restaurants-near-me",
                            },
                            {
                                text: "Mughlai Restaurant Near Me",
                                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
                            },
                            {
                                text: "Sushi Restaurant Near Me",
                                link: "https://www.swiggy.com/sushi-restaurants-near-me",
                            },
                            {
                                text: "Mangalorean Restaurant Near Me",
                                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
                            },
                            {
                                text: "Tibetan Restaurant Near Me",
                                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
                            },
                            {
                                text: "Barbecue Restaurant Near Me",
                                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
                            },
                            {
                                text: "Maharashtrian Restaurant Near Me",
                                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
                            },
                            {
                                text: "Nepalese Restaurant Near Me",
                                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
                            },
                            {
                                text: "Rajasthani Restaurant Near Me",
                                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
                            },
                            {
                                text: "Turkish Restaurant Near Me",
                                link: "https://www.swiggy.com/turkish-restaurants-near-me",
                            },
                        ],
                        id: "restaurant_near_me_links",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        title: "Explore Every Restaurants Near Me",
                        brands: [
                            {
                                text: "Explore Restaurants Near Me",
                                link: "https://www.swiggy.com/restaurants-near-me",
                            },
                            {
                                text: "Explore Top Rated Restaurants Near Me",
                                link: "https://www.swiggy.com/best-restaurants-near-me",
                            },
                        ],
                        id: "restaurant_near_me_links",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
                        title: "For better experience,download the Swiggy app now",
                        androidAppImage: "portal/m/play_store.png",
                        androidAppLink:
                            "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                        iosAppImage: "portal/m/app_store.png",
                        iosAppLink:
                            "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                        id: "app_install_links",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
                        cities: [
                            {
                                text: "Bangalore",
                                link: "https://www.swiggy.com/city/bangalore",
                            },
                            {
                                text: "Gurgaon",
                                link: "https://www.swiggy.com/city/gurgaon",
                            },
                            {
                                text: "Hyderabad",
                                link: "https://www.swiggy.com/city/hyderabad",
                            },
                            {
                                text: "Delhi",
                                link: "https://www.swiggy.com/city/delhi",
                            },
                            {
                                text: "Mumbai",
                                link: "https://www.swiggy.com/city/mumbai",
                            },
                            {
                                text: "Pune",
                                link: "https://www.swiggy.com/city/pune",
                            },
                            {
                                text: "Kolkata",
                                link: "https://www.swiggy.com/city/kolkata",
                            },
                            {
                                text: "Chennai",
                                link: "https://www.swiggy.com/city/chennai",
                            },
                            {
                                text: "Ahmedabad",
                                link: "https://www.swiggy.com/city/ahmedabad",
                            },
                            {
                                text: "Chandigarh",
                                link: "https://www.swiggy.com/city/chandigarh",
                            },
                            {
                                text: "Jaipur",
                                link: "https://www.swiggy.com/city/jaipur",
                            },
                            {
                                text: "Kochi",
                                link: "https://www.swiggy.com/city/kochi",
                            },
                            {
                                text: "Coimbatore",
                                link: "https://www.swiggy.com/city/coimbatore",
                            },
                            {
                                text: "Lucknow",
                                link: "https://www.swiggy.com/city/lucknow",
                            },
                            {
                                text: "Nagpur",
                                link: "https://www.swiggy.com/city/nagpur",
                            },
                            {
                                text: "Vadodara",
                                link: "https://www.swiggy.com/city/vadodara",
                            },
                            {
                                text: "Indore",
                                link: "https://www.swiggy.com/city/indore",
                            },
                            {
                                text: "Guwahati",
                                link: "https://www.swiggy.com/city/guwahati",
                            },
                            {
                                text: "Vizag",
                                link: "https://www.swiggy.com/city/vizag",
                            },
                            {
                                text: "Surat",
                                link: "https://www.swiggy.com/city/surat",
                            },
                            {
                                text: "Dehradun",
                                link: "https://www.swiggy.com/city/dehradun",
                            },
                            {
                                text: "Noida",
                                link: "https://www.swiggy.com/city/noida",
                            },
                            {
                                text: "Ludhiana",
                                link: "https://www.swiggy.com/city/ludhiana",
                            },
                            {
                                text: "Trichy",
                                link: "https://www.swiggy.com/city/trichy",
                            },
                            {
                                text: "Vijayawada",
                                link: "https://www.swiggy.com/city/vijayawada",
                            },
                            {
                                text: "Kanpur",
                                link: "https://www.swiggy.com/city/kanpur",
                            },
                            {
                                text: "Mysore",
                                link: "https://www.swiggy.com/city/mysore",
                            },
                            {
                                text: "Nashik",
                                link: "https://www.swiggy.com/city/nashik",
                            },
                            {
                                text: "Udaipur",
                                link: "https://www.swiggy.com/city/udaipur",
                            },
                            {
                                text: "Pondicherry",
                                link: "https://www.swiggy.com/city/pondicherry",
                            },
                            {
                                text: "Agra",
                                link: "https://www.swiggy.com/city/agra",
                            },
                            {
                                text: "Aurangabad",
                                link: "https://www.swiggy.com/city/aurangabad",
                            },
                            {
                                text: "Jalandhar",
                                link: "https://www.swiggy.com/city/jalandhar",
                            },
                            {
                                text: "Kota",
                                link: "https://www.swiggy.com/city/kota",
                            },
                            {
                                text: "Madurai",
                                link: "https://www.swiggy.com/city/madurai",
                            },
                            {
                                text: "Allahabad",
                                link: "https://www.swiggy.com/city/allahabad",
                            },
                            {
                                text: "Manipal",
                                link: "https://www.swiggy.com/city/manipal",
                            },
                            {
                                text: "Amritsar",
                                link: "https://www.swiggy.com/city/amritsar",
                            },
                            {
                                text: "Bareilly",
                                link: "https://www.swiggy.com/city/bareilly",
                            },
                            {
                                text: "Meerut",
                                link: "https://www.swiggy.com/city/meerut",
                            },
                            {
                                text: "Bhopal",
                                link: "https://www.swiggy.com/city/bhopal",
                            },
                            {
                                text: "Ooty",
                                link: "https://www.swiggy.com/city/ooty",
                            },
                            {
                                text: "Bhubaneswar",
                                link: "https://www.swiggy.com/city/bhubaneswar",
                            },
                            {
                                text: "Raipur",
                                link: "https://www.swiggy.com/city/raipur",
                            },
                            {
                                text: "Bikaner",
                                link: "https://www.swiggy.com/city/bikaner",
                            },
                            {
                                text: "Rajkot",
                                link: "https://www.swiggy.com/city/rajkot",
                            },
                            {
                                text: "Kozhikode",
                                link: "https://www.swiggy.com/city/kozhikode",
                            },
                            {
                                text: "Central Goa",
                                link: "https://www.swiggy.com/city/central-goa",
                            },
                            {
                                text: "Sirsa",
                                link: "https://www.swiggy.com/city/sirsa",
                            },
                            {
                                text: "Gwalior",
                                link: "https://www.swiggy.com/city/gwalior",
                            },
                            {
                                text: "Thrissur",
                                link: "https://www.swiggy.com/city/thrissur",
                            },
                            {
                                text: "Kharagpur",
                                link: "https://www.swiggy.com/city/kharagpur",
                            },
                            {
                                text: "Tirupati",
                                link: "https://www.swiggy.com/city/tirupati",
                            },
                            {
                                text: "Tirupur",
                                link: "https://www.swiggy.com/city/tirupur",
                            },
                            {
                                text: "Vellore",
                                link: "https://www.swiggy.com/city/vellore",
                            },
                            {
                                text: "Thiruvananthapuram",
                                link: "https://www.swiggy.com/city/thiruvananthapuram",
                            },
                            {
                                text: "Warangal",
                                link: "https://www.swiggy.com/city/warangal",
                            },
                            {
                                text: "Varanasi",
                                link: "https://www.swiggy.com/city/varanasi",
                            },
                            {
                                text: "Mangaluru",
                                link: "https://www.swiggy.com/city/mangaluru",
                            },
                            {
                                text: "Patna",
                                link: "https://www.swiggy.com/city/patna",
                            },
                            {
                                text: "Ranchi",
                                link: "https://www.swiggy.com/city/ranchi",
                            },
                            {
                                text: "Faridabad",
                                link: "https://www.swiggy.com/city/faridabad",
                            },
                            {
                                text: "Guntur",
                                link: "https://www.swiggy.com/city/guntur",
                            },
                            {
                                text: "Ujjain",
                                link: "https://www.swiggy.com/city/ujjain",
                            },
                            {
                                text: "Patiala",
                                link: "https://www.swiggy.com/city/patiala",
                            },
                            {
                                text: "Karnal",
                                link: "https://www.swiggy.com/city/karnal",
                            },
                            {
                                text: "Kakinada",
                                link: "https://www.swiggy.com/city/kakinada",
                            },
                            {
                                text: "Rajahmundry",
                                link: "https://www.swiggy.com/city/rajahmundry",
                            },
                            {
                                text: "Bilaspur",
                                link: "https://www.swiggy.com/city/bilaspur",
                            },
                            {
                                text: "Bhilai",
                                link: "https://www.swiggy.com/city/bhilai",
                            },
                            {
                                text: "Anand",
                                link: "https://www.swiggy.com/city/anand",
                            },
                            {
                                text: "Bhavnagar",
                                link: "https://www.swiggy.com/city/bhavnagar",
                            },
                            {
                                text: "Jammu",
                                link: "https://www.swiggy.com/city/jammu",
                            },
                            {
                                text: "Muktsar",
                                link: "https://www.swiggy.com/city/muktsar",
                            },
                            {
                                text: "Panipat",
                                link: "https://www.swiggy.com/city/panipat",
                            },
                            {
                                text: "Jamshedpur",
                                link: "https://www.swiggy.com/city/jamshedpur",
                            },
                            {
                                text: "Dhanbad",
                                link: "https://www.swiggy.com/city/dhanbad",
                            },
                            {
                                text: "Bokaro",
                                link: "https://www.swiggy.com/city/bokaro",
                            },
                            {
                                text: "Hubli",
                                link: "https://www.swiggy.com/city/hubli",
                            },
                            {
                                text: "Belgaum",
                                link: "https://www.swiggy.com/city/belgaum",
                            },
                            {
                                text: "Jabalpur",
                                link: "https://www.swiggy.com/city/jabalpur",
                            },
                            {
                                text: "Kolhapur",
                                link: "https://www.swiggy.com/city/kolhapur",
                            },
                            {
                                text: "Solapur",
                                link: "https://www.swiggy.com/city/solapur",
                            },
                            {
                                text: "Shillong",
                                link: "https://www.swiggy.com/city/shillong",
                            },
                            {
                                text: "Cuttack",
                                link: "https://www.swiggy.com/city/cuttack",
                            },
                            {
                                text: "Aligarh",
                                link: "https://www.swiggy.com/city/aligarh",
                            },
                            {
                                text: "Salem",
                                link: "https://www.swiggy.com/city/salem",
                            },
                            {
                                text: "Agartala",
                                link: "https://www.swiggy.com/city/agartala",
                            },
                            {
                                text: "Jodhpur",
                                link: "https://www.swiggy.com/city/jodhpur",
                            },
                            {
                                text: "Ajmer",
                                link: "https://www.swiggy.com/city/ajmer",
                            },
                            {
                                text: "Jhansi",
                                link: "https://www.swiggy.com/city/jhansi",
                            },
                            {
                                text: "Gorakhpur",
                                link: "https://www.swiggy.com/city/gorakhpur",
                            },
                            {
                                text: "Thanjavur",
                                link: "https://www.swiggy.com/city/thanjavur",
                            },
                            {
                                text: "Erode",
                                link: "https://www.swiggy.com/city/erode",
                            },
                            {
                                text: "Nellore",
                                link: "https://www.swiggy.com/city/nellore",
                            },
                            {
                                text: "Rourkela",
                                link: "https://www.swiggy.com/city/rourkela",
                            },
                            {
                                text: "Anantapur",
                                link: "https://www.swiggy.com/city/anantapur",
                            },
                            {
                                text: "Kurnool",
                                link: "https://www.swiggy.com/city/kurnool",
                            },
                            {
                                text: "Ahmednagar",
                                link: "https://www.swiggy.com/city/ahmednagar",
                            },
                            {
                                text: "Phagwara",
                                link: "https://www.swiggy.com/city/phagwara",
                            },
                            {
                                text: "Ambala",
                                link: "https://www.swiggy.com/city/ambala",
                            },
                            {
                                text: "Ballari",
                                link: "https://www.swiggy.com/city/ballari",
                            },
                            {
                                text: "Saharanpur",
                                link: "https://www.swiggy.com/city/saharanpur",
                            },
                            {
                                text: "Tirunelveli",
                                link: "https://www.swiggy.com/city/tirunelveli",
                            },
                            {
                                text: "Bathinda",
                                link: "https://www.swiggy.com/city/bathinda",
                            },
                            {
                                text: "Mathura",
                                link: "https://www.swiggy.com/city/mathura",
                            },
                            {
                                text: "Haridwar",
                                link: "https://www.swiggy.com/city/haridwar",
                            },
                            {
                                text: "Ratnagiri",
                                link: "https://www.swiggy.com/city/ratnagiri",
                            },
                            {
                                text: "Sangli",
                                link: "https://www.swiggy.com/city/sangli",
                            },
                            {
                                text: "Amravati",
                                link: "https://www.swiggy.com/city/amravati",
                            },
                            {
                                text: "Rishikesh",
                                link: "https://www.swiggy.com/city/rishikesh",
                            },
                            {
                                text: "Nagercoil",
                                link: "https://www.swiggy.com/city/nagercoil",
                            },
                            {
                                text: "KanyaKumari",
                                link: "https://www.swiggy.com/city/kanyakumari",
                            },
                            {
                                text: "Kadapa",
                                link: "https://www.swiggy.com/city/kadapa",
                            },
                            {
                                text: "Nizamabad",
                                link: "https://www.swiggy.com/city/nizamabad",
                            },
                            {
                                text: "Shivamogga",
                                link: "https://www.swiggy.com/city/shivamogga",
                            },
                            {
                                text: "Davanagere",
                                link: "https://www.swiggy.com/city/davanagere",
                            },
                            {
                                text: "Roorkee",
                                link: "https://www.swiggy.com/city/roorkee",
                            },
                            {
                                text: "Nanded",
                                link: "https://www.swiggy.com/city/nanded",
                            },
                            {
                                text: "Rewa",
                                link: "https://www.swiggy.com/city/rewa",
                            },
                            {
                                text: "Satna",
                                link: "https://www.swiggy.com/city/satna",
                            },
                            {
                                text: "Shimla",
                                link: "https://www.swiggy.com/city/shimla",
                            },
                            {
                                text: "Muzaffarpur",
                                link: "https://www.swiggy.com/city/muzaffarpur",
                            },
                            {
                                text: "Valsad",
                                link: "https://www.swiggy.com/city/valsad",
                            },
                            {
                                text: "Vapi",
                                link: "https://www.swiggy.com/city/vapi",
                            },
                            {
                                text: "Chhapra",
                                link: "https://www.swiggy.com/city/chhapra",
                            },
                            {
                                text: "Dharamshala",
                                link: "https://www.swiggy.com/city/dharamshala",
                            },
                            {
                                text: "Kollam",
                                link: "https://www.swiggy.com/city/kollam",
                            },
                            {
                                text: "Silchar",
                                link: "https://www.swiggy.com/city/silchar",
                            },
                            {
                                text: "Alappuzha",
                                link: "https://www.swiggy.com/city/alappuzha",
                            },
                            {
                                text: "Sonipat",
                                link: "https://www.swiggy.com/city/sonipat",
                            },
                            {
                                text: "Rohtak",
                                link: "https://www.swiggy.com/city/rohtak",
                            },
                            {
                                text: "Mehsana",
                                link: "https://www.swiggy.com/city/mehsana",
                            },
                            {
                                text: "Kullu",
                                link: "https://www.swiggy.com/city/kullu",
                            },
                            {
                                text: "Dhule",
                                link: "https://www.swiggy.com/city/dhule",
                            },
                            {
                                text: "Dharwad",
                                link: "https://www.swiggy.com/city/dharwad",
                            },
                            {
                                text: "Latur",
                                link: "https://www.swiggy.com/city/latur",
                            },
                            {
                                text: "Vizianagaram",
                                link: "https://www.swiggy.com/city/vizianagaram",
                            },
                            {
                                text: "Khammam",
                                link: "https://www.swiggy.com/city/khammam",
                            },
                            {
                                text: "Hampi",
                                link: "https://www.swiggy.com/city/hampi",
                            },
                            {
                                text: "Nainital",
                                link: "https://www.swiggy.com/city/nainital",
                            },
                            {
                                text: "Akola",
                                link: "https://www.swiggy.com/city/akola",
                            },
                            {
                                text: "Kalaburagi",
                                link: "https://www.swiggy.com/city/kalaburagi",
                            },
                            {
                                text: "Gaya",
                                link: "https://www.swiggy.com/city/gaya",
                            },
                            {
                                text: "Muzaffarnagar",
                                link: "https://www.swiggy.com/city/muzaffarnagar",
                            },
                            {
                                text: "Dewas",
                                link: "https://www.swiggy.com/city/dewas",
                            },
                            {
                                text: "Korba",
                                link: "https://www.swiggy.com/city/korba",
                            },
                            {
                                text: "Mussoorie",
                                link: "https://www.swiggy.com/city/mussoorie",
                            },
                            {
                                text: "Jalgaon",
                                link: "https://www.swiggy.com/city/jalgaon",
                            },
                            {
                                text: "Yamuna Nagar",
                                link: "https://www.swiggy.com/city/yamuna-nagar",
                            },
                            {
                                text: "Bhagalpur",
                                link: "https://www.swiggy.com/city/bhagalpur",
                            },
                            {
                                text: "Hapur",
                                link: "https://www.swiggy.com/city/hapur",
                            },
                            {
                                text: "Morena",
                                link: "https://www.swiggy.com/city/morena",
                            },
                            {
                                text: "Hassan",
                                link: "https://www.swiggy.com/city/hassan",
                            },
                            {
                                text: "Hisar",
                                link: "https://www.swiggy.com/city/hisar",
                            },
                            {
                                text: "Godhra",
                                link: "https://www.swiggy.com/city/godhra",
                            },
                            {
                                text: "Kolar ",
                                link: "https://www.swiggy.com/city/kolar",
                            },
                            {
                                text: "Rampur",
                                link: "https://www.swiggy.com/city/rampur",
                            },
                            {
                                text: "Sitapur",
                                link: "https://www.swiggy.com/city/sitapur",
                            },
                            {
                                text: "Etawah",
                                link: "https://www.swiggy.com/city/etawah",
                            },
                            {
                                text: "Porbandar",
                                link: "https://www.swiggy.com/city/porbandar",
                            },
                            {
                                text: "Nadiad",
                                link: "https://www.swiggy.com/city/nadiad",
                            },
                            {
                                text: "Sagar",
                                link: "https://www.swiggy.com/city/sagar",
                            },
                            {
                                text: "Morbi",
                                link: "https://www.swiggy.com/city/morbi",
                            },
                            {
                                text: "Chhindwara",
                                link: "https://www.swiggy.com/city/chhindwara",
                            },
                            {
                                text: "Tumakuru",
                                link: "https://www.swiggy.com/city/tumakuru",
                            },
                            {
                                text: "Singrauli",
                                link: "https://www.swiggy.com/city/singrauli",
                            },
                            {
                                text: "Thoothukudi",
                                link: "https://www.swiggy.com/city/thoothukudi",
                            },
                            {
                                text: "Katni",
                                link: "https://www.swiggy.com/city/katni",
                            },
                            {
                                text: "Khandwa",
                                link: "https://www.swiggy.com/city/khandwa",
                            },
                            {
                                text: "Eluru",
                                link: "https://www.swiggy.com/city/eluru",
                            },
                            {
                                text: "Malappuram",
                                link: "https://www.swiggy.com/city/malappuram",
                            },
                            {
                                text: "Dibrugarh",
                                link: "https://www.swiggy.com/city/dibrugarh",
                            },
                            {
                                text: "Deoghar",
                                link: "https://www.swiggy.com/city/deoghar",
                            },
                            {
                                text: "Khanna",
                                link: "https://www.swiggy.com/city/khanna",
                            },
                            {
                                text: "Bidar",
                                link: "https://www.swiggy.com/city/bidar",
                            },
                            {
                                text: "Anantnag",
                                link: "https://www.swiggy.com/city/anantnag",
                            },
                            {
                                text: "Madikeri",
                                link: "https://www.swiggy.com/city/madikeri",
                            },
                            {
                                text: "Haldwani",
                                link: "https://www.swiggy.com/city/haldwani",
                            },
                            {
                                text: "Panchkula",
                                link: "https://www.swiggy.com/city/panchkula",
                            },
                            {
                                text: "Farrukhabad",
                                link: "https://www.swiggy.com/city/farrukhabad",
                            },
                            {
                                text: "Malegaon",
                                link: "https://www.swiggy.com/city/malegaon",
                            },
                            {
                                text: "Dindigul",
                                link: "https://www.swiggy.com/city/dindigul",
                            },
                            {
                                text: "Shahjahanpur",
                                link: "https://www.swiggy.com/city/shahjahanpur",
                            },
                            {
                                text: "Beed",
                                link: "https://www.swiggy.com/city/beed",
                            },
                            {
                                text: "Junagadh",
                                link: "https://www.swiggy.com/city/junagadh",
                            },
                            {
                                text: "Asansol",
                                link: "https://www.swiggy.com/city/asansol",
                            },
                            {
                                text: "Beawar",
                                link: "https://www.swiggy.com/city/beawar",
                            },
                            {
                                text: "Kishangarh",
                                link: "https://www.swiggy.com/city/kishangarh",
                            },
                            {
                                text: "Budhwal",
                                link: "https://www.swiggy.com/city/budhwal",
                            },
                            {
                                text: "Parbhani",
                                link: "https://www.swiggy.com/city/parbhani",
                            },
                            {
                                text: "Gondia",
                                link: "https://www.swiggy.com/city/gondia",
                            },
                            {
                                text: "Ichalkaranji",
                                link: "https://www.swiggy.com/city/ichalkaranji",
                            },
                            {
                                text: "Jalna",
                                link: "https://www.swiggy.com/city/jalna",
                            },
                            {
                                text: "Yavatmal",
                                link: "https://www.swiggy.com/city/yavatmal",
                            },
                            {
                                text: "Shivpuri",
                                link: "https://www.swiggy.com/city/shivpuri",
                            },
                            {
                                text: "Moga",
                                link: "https://www.swiggy.com/city/moga",
                            },
                            {
                                text: "Abohar",
                                link: "https://www.swiggy.com/city/abohar",
                            },
                            {
                                text: "Adoni",
                                link: "https://www.swiggy.com/city/adoni",
                            },
                            {
                                text: "Madanapalle",
                                link: "https://www.swiggy.com/city/madanapalle",
                            },
                            {
                                text: "Tiruvannamalai",
                                link: "https://www.swiggy.com/city/tiruvannamalai",
                            },
                            {
                                text: "Satara",
                                link: "https://www.swiggy.com/city/satara",
                            },
                            {
                                text: "Ambur",
                                link: "https://www.swiggy.com/city/ambur",
                            },
                            {
                                text: "Karimnagar",
                                link: "https://www.swiggy.com/city/karimnagar",
                            },
                            {
                                text: "Ratlam",
                                link: "https://www.swiggy.com/city/ratlam",
                            },
                            {
                                text: "Moradabad",
                                link: "https://www.swiggy.com/city/moradabad",
                            },
                            {
                                text: "Machilipatnam",
                                link: "https://www.swiggy.com/city/machilipatnam",
                            },
                            {
                                text: "Ongole",
                                link: "https://www.swiggy.com/city/ongole",
                            },
                            {
                                text: "Kottayam",
                                link: "https://www.swiggy.com/city/kottayam",
                            },
                            {
                                text: "Darbhanga",
                                link: "https://www.swiggy.com/city/darbhanga",
                            },
                            {
                                text: "Kurukshetra",
                                link: "https://www.swiggy.com/city/kurukshetra",
                            },
                            {
                                text: "Unnao",
                                link: "https://www.swiggy.com/city/unnao",
                            },
                            {
                                text: "Bulandshahr",
                                link: "https://www.swiggy.com/city/bulandshahr",
                            },
                            {
                                text: "Durgapur",
                                link: "https://www.swiggy.com/city/durgapur",
                            },
                            {
                                text: "Siliguri",
                                link: "https://www.swiggy.com/city/siliguri",
                            },
                            {
                                text: "Pali",
                                link: "https://www.swiggy.com/city/pali",
                            },
                            {
                                text: "Tadepalligudem",
                                link: "https://www.swiggy.com/city/tadepalligudem",
                            },
                            {
                                text: "Ramagundam",
                                link: "https://www.swiggy.com/city/ramagundam",
                            },
                            {
                                text: "Mahbubnagar",
                                link: "https://www.swiggy.com/city/mahbubnagar",
                            },
                            {
                                text: "Bhiwani",
                                link: "https://www.swiggy.com/city/bhiwani",
                            },
                            {
                                text: "Cuddalore",
                                link: "https://www.swiggy.com/city/cuddalore",
                            },
                            {
                                text: "Kaithal",
                                link: "https://www.swiggy.com/city/kaithal",
                            },
                            {
                                text: "Jagtial",
                                link: "https://www.swiggy.com/city/jagtial",
                            },
                            {
                                text: "Palakkad",
                                link: "https://www.swiggy.com/city/palakkad",
                            },
                            {
                                text: "Guna",
                                link: "https://www.swiggy.com/city/guna",
                            },
                            {
                                text: "Kumbakonam",
                                link: "https://www.swiggy.com/city/kumbakonam",
                            },
                            {
                                text: "Maunath Bhanjan",
                                link: "https://www.swiggy.com/city/maunath-bhanjan",
                            },
                            {
                                text: "Baripada",
                                link: "https://www.swiggy.com/city/baripada",
                            },
                            {
                                text: "Orai",
                                link: "https://www.swiggy.com/city/orai",
                            },
                            {
                                text: "Bhadrak",
                                link: "https://www.swiggy.com/city/bhadrak",
                            },
                            {
                                text: "Batala",
                                link: "https://www.swiggy.com/city/batala",
                            },
                            {
                                text: "Firozpur",
                                link: "https://www.swiggy.com/city/firozpur",
                            },
                            {
                                text: "Barnala",
                                link: "https://www.swiggy.com/city/barnala",
                            },
                            {
                                text: "Raigarh",
                                link: "https://www.swiggy.com/city/raigarh",
                            },
                            {
                                text: "Nagaon",
                                link: "https://www.swiggy.com/city/nagaon",
                            },
                            {
                                text: "Mainpuri",
                                link: "https://www.swiggy.com/city/mainpuri",
                            },
                            {
                                text: "Balurghat",
                                link: "https://www.swiggy.com/city/balurghat",
                            },
                            {
                                text: "Giridih",
                                link: "https://www.swiggy.com/city/giridih",
                            },
                            {
                                text: "Ghazipur",
                                link: "https://www.swiggy.com/city/ghazipur",
                            },
                            {
                                text: "Jagdalpur",
                                link: "https://www.swiggy.com/city/jagdalpur",
                            },
                            {
                                text: "Vidisha",
                                link: "https://www.swiggy.com/city/vidisha",
                            },
                            {
                                text: "Dimapur",
                                link: "https://www.swiggy.com/city/dimapur",
                            },
                            {
                                text: "Shikohabad",
                                link: "https://www.swiggy.com/city/shikohabad",
                            },
                            {
                                text: "Imphal",
                                link: "https://www.swiggy.com/city/imphal",
                            },
                            {
                                text: "Lakhimpur",
                                link: "https://www.swiggy.com/city/lakhimpur",
                            },
                            {
                                text: "Rudrapur",
                                link: "https://www.swiggy.com/city/rudrapur",
                            },
                            {
                                text: "Ambikapur",
                                link: "https://www.swiggy.com/city/ambikapur",
                            },
                            {
                                text: "Damoh",
                                link: "https://www.swiggy.com/city/damoh",
                            },
                            {
                                text: "Rae Bareli",
                                link: "https://www.swiggy.com/city/rae-bareli",
                            },
                            {
                                text: "Tinsukia",
                                link: "https://www.swiggy.com/city/tinsukia",
                            },
                            {
                                text: "Rajapalayam",
                                link: "https://www.swiggy.com/city/rajapalayam",
                            },
                            {
                                text: "Rajnandgaon",
                                link: "https://www.swiggy.com/city/rajnandgaon",
                            },
                            {
                                text: "Kashipur",
                                link: "https://www.swiggy.com/city/kashipur",
                            },
                            {
                                text: "Ranibennur",
                                link: "https://www.swiggy.com/city/ranibennur",
                            },
                            {
                                text: "Burhanpur",
                                link: "https://www.swiggy.com/city/burhanpur",
                            },
                            {
                                text: "Bhadravati",
                                link: "https://www.swiggy.com/city/bhadravati",
                            },
                            {
                                text: "Chittoor",
                                link: "https://www.swiggy.com/city/chittoor",
                            },
                            {
                                text: "Pudukkottai",
                                link: "https://www.swiggy.com/city/pudukkottai",
                            },
                            {
                                text: "Hardoi",
                                link: "https://www.swiggy.com/city/hardoi",
                            },
                            {
                                text: "Basti",
                                link: "https://www.swiggy.com/city/basti",
                            },
                            {
                                text: "Karaikkudi",
                                link: "https://www.swiggy.com/city/karaikkudi",
                            },
                            {
                                text: "Lalitpur",
                                link: "https://www.swiggy.com/city/lalitpur",
                            },
                            {
                                text: "Hospet",
                                link: "https://www.swiggy.com/city/hospet",
                            },
                            {
                                text: "Budaun",
                                link: "https://www.swiggy.com/city/budaun",
                            },
                            {
                                text: "Neemuch",
                                link: "https://www.swiggy.com/city/neemuch",
                            },
                            {
                                text: "Pilibhit",
                                link: "https://www.swiggy.com/city/pilibhit",
                            },
                            {
                                text: "Amroha",
                                link: "https://www.swiggy.com/city/amroha",
                            },
                            {
                                text: "Barshi",
                                link: "https://www.swiggy.com/city/barshi",
                            },
                            {
                                text: "Sri Ganganagar",
                                link: "https://www.swiggy.com/city/sri-ganganagar",
                            },
                            {
                                text: "Wardha",
                                link: "https://www.swiggy.com/city/wardha",
                            },
                            {
                                text: "Sehore",
                                link: "https://www.swiggy.com/city/sehore",
                            },
                            {
                                text: "Bhimavaram",
                                link: "https://www.swiggy.com/city/bhimavaram",
                            },
                            {
                                text: "Hanumangarh",
                                link: "https://www.swiggy.com/city/hanumangarh",
                            },
                            {
                                text: "Pathankot",
                                link: "https://www.swiggy.com/city/pathankot",
                            },
                            {
                                text: "Puri",
                                link: "https://www.swiggy.com/city/puri",
                            },
                            {
                                text: "Fatehpur",
                                link: "https://www.swiggy.com/city/fatehpur",
                            },
                            {
                                text: "Surendranagar Dudhrej",
                                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
                            },
                            {
                                text: "Jamnagar",
                                link: "https://www.swiggy.com/city/jamnagar",
                            },
                            {
                                text: "Bhuj",
                                link: "https://www.swiggy.com/city/bhuj",
                            },
                            {
                                text: "Gandhidham",
                                link: "https://www.swiggy.com/city/gandhidham",
                            },
                            {
                                text: "Bharuch",
                                link: "https://www.swiggy.com/city/bharuch",
                            },
                            {
                                text: "Navsari",
                                link: "https://www.swiggy.com/city/navsari",
                            },
                            {
                                text: "Amreli",
                                link: "https://www.swiggy.com/city/amreli",
                            },
                            {
                                text: "Palanpur",
                                link: "https://www.swiggy.com/city/palanpur",
                            },
                            {
                                text: "Bhilwara",
                                link: "https://www.swiggy.com/city/bhilwara",
                            },
                            {
                                text: "Suratgarh",
                                link: "https://www.swiggy.com/city/suratgarh",
                            },
                            {
                                text: "Sikar",
                                link: "https://www.swiggy.com/city/sikar",
                            },
                            {
                                text: "Churu",
                                link: "https://www.swiggy.com/city/churu",
                            },
                            {
                                text: "Alwar",
                                link: "https://www.swiggy.com/city/alwar",
                            },
                            {
                                text: "Bhiwadi",
                                link: "https://www.swiggy.com/city/bhiwadi",
                            },
                            {
                                text: "Bharatpur",
                                link: "https://www.swiggy.com/city/bharatpur",
                            },
                            {
                                text: "Mount Abu",
                                link: "https://www.swiggy.com/city/mount-abu",
                            },
                            {
                                text: "Bundi",
                                link: "https://www.swiggy.com/city/bundi",
                            },
                            {
                                text: "Sawai Madhopur",
                                link: "https://www.swiggy.com/city/sawai-madhopur",
                            },
                            {
                                text: "Purulia",
                                link: "https://www.swiggy.com/city/purulia",
                            },
                            {
                                text: "Bardhaman",
                                link: "https://www.swiggy.com/city/bardhaman",
                            },
                            {
                                text: "Raniganj",
                                link: "https://www.swiggy.com/city/raniganj",
                            },
                            {
                                text: "Darjeeling",
                                link: "https://www.swiggy.com/city/darjeeling",
                            },
                            {
                                text: "Jalpaiguri",
                                link: "https://www.swiggy.com/city/jalpaiguri",
                            },
                            {
                                text: "Chittorgarh",
                                link: "https://www.swiggy.com/city/chittorgarh",
                            },
                            {
                                text: "Dholpur",
                                link: "https://www.swiggy.com/city/dholpur",
                            },
                            {
                                text: "Uluberia",
                                link: "https://www.swiggy.com/city/uluberia",
                            },
                            {
                                text: "Nabadwip",
                                link: "https://www.swiggy.com/city/nabadwip",
                            },
                            {
                                text: "Bongaon",
                                link: "https://www.swiggy.com/city/bongaon",
                            },
                            {
                                text: "Kanchrapara",
                                link: "https://www.swiggy.com/city/kanchrapara",
                            },
                            {
                                text: "Bankura",
                                link: "https://www.swiggy.com/city/bankura",
                            },
                            {
                                text: "Habra",
                                link: "https://www.swiggy.com/city/habra",
                            },
                            {
                                text: "Firozabad",
                                link: "https://www.swiggy.com/city/firozabad",
                            },
                            {
                                text: "Nalgonda",
                                link: "https://www.swiggy.com/city/nalgonda",
                            },
                            {
                                text: "Chandrapur",
                                link: "https://www.swiggy.com/city/chandrapur",
                            },
                            {
                                text: "Bijapur",
                                link: "https://www.swiggy.com/city/bijapur",
                            },
                            {
                                text: "Bhusawal",
                                link: "https://www.swiggy.com/city/bhusawal",
                            },
                            {
                                text: "Raichur",
                                link: "https://www.swiggy.com/city/raichur",
                            },
                            {
                                text: "Bahraich",
                                link: "https://www.swiggy.com/city/bahraich",
                            },
                            {
                                text: "Azamgarh",
                                link: "https://www.swiggy.com/city/azamgarh",
                            },
                            {
                                text: "Bahadurgarh",
                                link: "https://www.swiggy.com/city/bahadurgarh",
                            },
                            {
                                text: "Jind",
                                link: "https://www.swiggy.com/city/jind",
                            },
                            {
                                text: "Rewari",
                                link: "https://www.swiggy.com/city/rewari",
                            },
                            {
                                text: "Palwal",
                                link: "https://www.swiggy.com/city/palwal",
                            },
                            {
                                text: "Hathras",
                                link: "https://www.swiggy.com/city/hathras",
                            },
                            {
                                text: "Sambalpur",
                                link: "https://www.swiggy.com/city/sambalpur",
                            },
                            {
                                text: "Banda",
                                link: "https://www.swiggy.com/city/banda",
                            },
                            {
                                text: "Hoshiarpur",
                                link: "https://www.swiggy.com/city/hoshiarpur",
                            },
                            {
                                text: "Faridkot",
                                link: "https://www.swiggy.com/city/faridkot",
                            },
                            {
                                text: "Mandsaur",
                                link: "https://www.swiggy.com/city/mandsaur",
                            },
                            {
                                text: "Suryapet",
                                link: "https://www.swiggy.com/city/suryapet",
                            },
                            {
                                text: "Adilabad",
                                link: "https://www.swiggy.com/city/adilabad",
                            },
                            {
                                text: "Narasaraopet",
                                link: "https://www.swiggy.com/city/narasaraopet",
                            },
                            {
                                text: "Faizabad",
                                link: "https://www.swiggy.com/city/faizabad",
                            },
                            {
                                text: "Tadpatri",
                                link: "https://www.swiggy.com/city/tadpatri",
                            },
                            {
                                text: "Gonda",
                                link: "https://www.swiggy.com/city/gonda",
                            },
                            {
                                text: "Mughalsarai",
                                link: "https://www.swiggy.com/city/mughalsarai",
                            },
                            {
                                text: "Medinipur",
                                link: "https://www.swiggy.com/city/medinipur",
                            },
                            {
                                text: "Nagda",
                                link: "https://www.swiggy.com/city/nagda",
                            },
                            {
                                text: "Chilakaluripet",
                                link: "https://www.swiggy.com/city/chilakaluripet",
                            },
                            {
                                text: "Hindupur",
                                link: "https://www.swiggy.com/city/hindupur",
                            },
                            {
                                text: "Kasganj",
                                link: "https://www.swiggy.com/city/kasganj",
                            },
                            {
                                text: "Raiganj",
                                link: "https://www.swiggy.com/city/raiganj",
                            },
                            {
                                text: "Deoria City",
                                link: "https://www.swiggy.com/city/deoria-city",
                            },
                            {
                                text: "Sultanpur",
                                link: "https://www.swiggy.com/city/sultanpur",
                            },
                            {
                                text: "Shamli",
                                link: "https://www.swiggy.com/city/shamli",
                            },
                            {
                                text: "Krishnanagar",
                                link: "https://www.swiggy.com/city/krishnanagar",
                            },
                            {
                                text: "Ballia",
                                link: "https://www.swiggy.com/city/ballia",
                            },
                            {
                                text: "Guntakal",
                                link: "https://www.swiggy.com/city/guntakal",
                            },
                            {
                                text: "Miryalaguda",
                                link: "https://www.swiggy.com/city/miryalaguda",
                            },
                            {
                                text: "Etah",
                                link: "https://www.swiggy.com/city/etah",
                            },
                            {
                                text: "Berhampore",
                                link: "https://www.swiggy.com/city/berhampore",
                            },
                            {
                                text: "Gudivada",
                                link: "https://www.swiggy.com/city/gudivada",
                            },
                            {
                                text: "Haldia",
                                link: "https://www.swiggy.com/city/haldia",
                            },
                            {
                                text: "Santipur",
                                link: "https://www.swiggy.com/city/santipur",
                            },
                            {
                                text: "Basirhat",
                                link: "https://www.swiggy.com/city/basirhat",
                            },
                            {
                                text: "Seoni",
                                link: "https://www.swiggy.com/city/seoni",
                            },
                            {
                                text: "Udgir",
                                link: "https://www.swiggy.com/city/udgir",
                            },
                            {
                                text: "Proddatur",
                                link: "https://www.swiggy.com/city/proddatur",
                            },
                            {
                                text: "Nagapattinam",
                                link: "https://www.swiggy.com/city/nagapattinam",
                            },
                            {
                                text: "Chikmagalur",
                                link: "https://www.swiggy.com/city/chikmagalur",
                            },
                            {
                                text: "Chandausi",
                                link: "https://www.swiggy.com/city/chandausi",
                            },
                            {
                                text: "Bhind",
                                link: "https://www.swiggy.com/city/bhind",
                            },
                            {
                                text: "Mandya",
                                link: "https://www.swiggy.com/city/mandya",
                            },
                            {
                                text: "Bagalkot",
                                link: "https://www.swiggy.com/city/bagalkot",
                            },
                            {
                                text: "Nandurbar",
                                link: "https://www.swiggy.com/city/nandurbar",
                            },
                            {
                                text: "Chitradurga",
                                link: "https://www.swiggy.com/city/chitradurga",
                            },
                            {
                                text: "Osmanabad",
                                link: "https://www.swiggy.com/city/osmanabad",
                            },
                            {
                                text: "Modinagar",
                                link: "https://www.swiggy.com/city/modinagar",
                            },
                            {
                                text: "Gadag-Betigeri",
                                link: "https://www.swiggy.com/city/gadag-betigeri",
                            },
                            {
                                text: "Hoshangabad",
                                link: "https://www.swiggy.com/city/hoshangabad",
                            },
                            {
                                text: "Jaunpur",
                                link: "https://www.swiggy.com/city/jaunpur",
                            },
                            {
                                text: "Khurja",
                                link: "https://www.swiggy.com/city/khurja",
                            },
                            {
                                text: "Port Blair",
                                link: "https://www.swiggy.com/city/port-blair",
                            },
                            {
                                text: "Jorhat",
                                link: "https://www.swiggy.com/city/jorhat",
                            },
                            {
                                text: "Nandyal",
                                link: "https://www.swiggy.com/city/nandyal",
                            },
                            {
                                text: "Biharsharif",
                                link: "https://www.swiggy.com/city/biharsharif",
                            },
                            {
                                text: "Buxar",
                                link: "https://www.swiggy.com/city/buxar",
                            },
                            {
                                text: "Siwan",
                                link: "https://www.swiggy.com/city/siwan",
                            },
                            {
                                text: "Dehri",
                                link: "https://www.swiggy.com/city/dehri",
                            },
                            {
                                text: "Bettiah",
                                link: "https://www.swiggy.com/city/bettiah",
                            },
                            {
                                text: "Kishanganj",
                                link: "https://www.swiggy.com/city/kishanganj",
                            },
                            {
                                text: "Saharsa",
                                link: "https://www.swiggy.com/city/saharsa",
                            },
                            {
                                text: "Hajipur",
                                link: "https://www.swiggy.com/city/hajipur",
                            },
                            {
                                text: "Motihari",
                                link: "https://www.swiggy.com/city/motihari",
                            },
                            {
                                text: "Sasaram",
                                link: "https://www.swiggy.com/city/sasaram",
                            },
                            {
                                text: "Munger",
                                link: "https://www.swiggy.com/city/munger",
                            },
                            {
                                text: "Katihar",
                                link: "https://www.swiggy.com/city/katihar",
                            },
                            {
                                text: "Arrah",
                                link: "https://www.swiggy.com/city/arrah",
                            },
                            {
                                text: "Srikakulam",
                                link: "https://www.swiggy.com/city/srikakulam",
                            },
                            {
                                text: "Begusarai",
                                link: "https://www.swiggy.com/city/begusarai",
                            },
                            {
                                text: "Neyveli",
                                link: "https://www.swiggy.com/city/neyveli",
                            },
                            {
                                text: "Waidhan",
                                link: "https://www.swiggy.com/city/waidhan",
                            },
                            {
                                text: "Markapur",
                                link: "https://www.swiggy.com/city/markapur",
                            },
                            {
                                text: "Chikkaballapur",
                                link: "https://www.swiggy.com/city/chikkaballapur",
                            },
                            {
                                text: "Bhatkal",
                                link: "https://www.swiggy.com/city/bhatkal",
                            },
                            {
                                text: "Gokak",
                                link: "https://www.swiggy.com/city/gokak",
                            },
                            {
                                text: "Itarsi",
                                link: "https://www.swiggy.com/city/itarsi",
                            },
                            {
                                text: "Dabra",
                                link: "https://www.swiggy.com/city/dabra",
                            },
                            {
                                text: "Dhar",
                                link: "https://www.swiggy.com/city/dhar",
                            },
                            {
                                text: "Chalisgaon",
                                link: "https://www.swiggy.com/city/chalisgaon",
                            },
                            {
                                text: "Thiruvallur",
                                link: "https://www.swiggy.com/city/thiruvallur",
                            },
                            {
                                text: "Namakkal",
                                link: "https://www.swiggy.com/city/namakkal",
                            },
                            {
                                text: "Dharmapuri",
                                link: "https://www.swiggy.com/city/dharmapuri",
                            },
                            {
                                text: "Bhandara",
                                link: "https://www.swiggy.com/city/bhandara",
                            },
                            {
                                text: "Virudhunagar",
                                link: "https://www.swiggy.com/city/virudhunagar",
                            },
                            {
                                text: "Siddipet",
                                link: "https://www.swiggy.com/city/siddipet",
                            },
                            {
                                text: "Gadwal",
                                link: "https://www.swiggy.com/city/gadwal",
                            },
                            {
                                text: "Bodhan-Rural",
                                link: "https://www.swiggy.com/city/bodhan-rural",
                            },
                            {
                                text: "Kamareddy",
                                link: "https://www.swiggy.com/city/kamareddy",
                            },
                            {
                                text: "Jhunjhunu",
                                link: "https://www.swiggy.com/city/jhunjhunu",
                            },
                            {
                                text: "Kapurthala",
                                link: "https://www.swiggy.com/city/kapurthala",
                            },
                            {
                                text: "Sangrur",
                                link: "https://www.swiggy.com/city/sangrur",
                            },
                            {
                                text: "Gurdaspur",
                                link: "https://www.swiggy.com/city/gurdaspur",
                            },
                            {
                                text: "Ramgarh",
                                link: "https://www.swiggy.com/city/ramgarh",
                            },
                            {
                                text: "Bantwal",
                                link: "https://www.swiggy.com/city/bantwal",
                            },
                            {
                                text: "Doddaballapura",
                                link: "https://www.swiggy.com/city/doddaballapura",
                            },
                            {
                                text: "Buldana",
                                link: "https://www.swiggy.com/city/buldana",
                            },
                            {
                                text: "Karad",
                                link: "https://www.swiggy.com/city/karad",
                            },
                            {
                                text: "Krishnagiri",
                                link: "https://www.swiggy.com/city/krishnagiri",
                            },
                            {
                                text: "Tiptur",
                                link: "https://www.swiggy.com/city/tiptur",
                            },
                            {
                                text: "Bhadrachalam",
                                link: "https://www.swiggy.com/city/bhadrachalam",
                            },
                            {
                                text: "Mancherial",
                                link: "https://www.swiggy.com/city/mancherial",
                            },
                            {
                                text: "Balrampur",
                                link: "https://www.swiggy.com/city/balrampur",
                            },
                            {
                                text: "Bharabanki",
                                link: "https://www.swiggy.com/city/bharabanki",
                            },
                            {
                                text: "Malout",
                                link: "https://www.swiggy.com/city/malout",
                            },
                            {
                                text: "Fatehgarh Sahib",
                                link: "https://www.swiggy.com/city/fatehgarh-sahib",
                            },
                            {
                                text: "Ropar",
                                link: "https://www.swiggy.com/city/ropar",
                            },
                            {
                                text: "Nangal",
                                link: "https://www.swiggy.com/city/nangal",
                            },
                            {
                                text: "Narnaul",
                                link: "https://www.swiggy.com/city/narnaul",
                            },
                            {
                                text: "Naraingarh",
                                link: "https://www.swiggy.com/city/naraingarh",
                            },
                            {
                                text: "Himmatnagar",
                                link: "https://www.swiggy.com/city/himmatnagar",
                            },
                            {
                                text: "Dausa",
                                link: "https://www.swiggy.com/city/dausa",
                            },
                            {
                                text: "Jahanabad",
                                link: "https://www.swiggy.com/city/jahanabad",
                            },
                            {
                                text: "Samastipur",
                                link: "https://www.swiggy.com/city/samastipur",
                            },
                            {
                                text: "Purnea",
                                link: "https://www.swiggy.com/city/purnea",
                            },
                            {
                                text: "Berhampur",
                                link: "https://www.swiggy.com/city/berhampur",
                            },
                            {
                                text: "Malda",
                                link: "https://www.swiggy.com/city/malda",
                            },
                            {
                                text: "Tuni",
                                link: "https://www.swiggy.com/city/tuni",
                            },
                            {
                                text: "Puttur",
                                link: "https://www.swiggy.com/city/puttur",
                            },
                            {
                                text: "Rayachoty",
                                link: "https://www.swiggy.com/city/rayachoty",
                            },
                            {
                                text: "Medak",
                                link: "https://www.swiggy.com/city/medak",
                            },
                            {
                                text: "Nirmal",
                                link: "https://www.swiggy.com/city/nirmal",
                            },
                            {
                                text: "Mirzapur",
                                link: "https://www.swiggy.com/city/mirzapur",
                            },
                            {
                                text: "Tanuku",
                                link: "https://www.swiggy.com/city/tanuku",
                            },
                            {
                                text: "Dahod",
                                link: "https://www.swiggy.com/city/dahod",
                            },
                            {
                                text: "Barmer",
                                link: "https://www.swiggy.com/city/barmer",
                            },
                            {
                                text: "Gangapur City",
                                link: "https://www.swiggy.com/city/gangapur-city",
                            },
                            {
                                text: "Mandi Gobindgarh",
                                link: "https://www.swiggy.com/city/mandi-gobindgarh",
                            },
                            {
                                text: "Tarn Taran Sahib",
                                link: "https://www.swiggy.com/city/tarn-taran-sahib",
                            },
                            {
                                text: "Nakodar",
                                link: "https://www.swiggy.com/city/nakodar",
                            },
                            {
                                text: "Ankleshwar",
                                link: "https://www.swiggy.com/city/ankleshwar",
                            },
                            {
                                text: "Vyara",
                                link: "https://www.swiggy.com/city/vyara",
                            },
                            {
                                text: "Bardoli",
                                link: "https://www.swiggy.com/city/bardoli",
                            },
                            {
                                text: "Halol",
                                link: "https://www.swiggy.com/city/halol",
                            },
                            {
                                text: "Bijnor",
                                link: "https://www.swiggy.com/city/bijnor",
                            },
                            {
                                text: "Sawantwadi",
                                link: "https://www.swiggy.com/city/sawantwadi",
                            },
                            {
                                text: "Shrirampur",
                                link: "https://www.swiggy.com/city/shrirampur",
                            },
                            {
                                text: "Sangamner",
                                link: "https://www.swiggy.com/city/sangamner",
                            },
                            {
                                text: "Baramati",
                                link: "https://www.swiggy.com/city/baramati",
                            },
                            {
                                text: "Betul",
                                link: "https://www.swiggy.com/city/betul",
                            },
                            {
                                text: "Chhatarpur",
                                link: "https://www.swiggy.com/city/chhatarpur",
                            },
                            {
                                text: "Datia",
                                link: "https://www.swiggy.com/city/datia",
                            },
                            {
                                text: "Balaghat",
                                link: "https://www.swiggy.com/city/balaghat",
                            },
                            {
                                text: "Sivakasi",
                                link: "https://www.swiggy.com/city/sivakasi",
                            },
                            {
                                text: "Viluppuram",
                                link: "https://www.swiggy.com/city/viluppuram",
                            },
                            {
                                text: "Ramanathapuram",
                                link: "https://www.swiggy.com/city/ramanathapuram",
                            },
                            {
                                text: "Sirsi",
                                link: "https://www.swiggy.com/city/sirsi",
                            },
                            {
                                text: "Kodaikanal",
                                link: "https://www.swiggy.com/city/kodaikanal",
                            },
                            {
                                text: "Theni",
                                link: "https://www.swiggy.com/city/theni",
                            },
                            {
                                text: "Karur",
                                link: "https://www.swiggy.com/city/karur",
                            },
                            {
                                text: "Karwar",
                                link: "https://www.swiggy.com/city/karwar",
                            },
                            {
                                text: "Sindhanur",
                                link: "https://www.swiggy.com/city/sindhanur",
                            },
                            {
                                text: "Kannur",
                                link: "https://www.swiggy.com/city/kannur",
                            },
                            {
                                text: "Noida 1",
                                link: "https://www.swiggy.com/city/noida-1",
                            },
                            {
                                text: "Karunagappaly",
                                link: "https://www.swiggy.com/city/karunagappaly",
                            },
                            {
                                text: "Thiruvalla",
                                link: "https://www.swiggy.com/city/thiruvalla",
                            },
                            {
                                text: "Thodupuzha",
                                link: "https://www.swiggy.com/city/thodupuzha",
                            },
                            {
                                text: "Kadiri",
                                link: "https://www.swiggy.com/city/kadiri",
                            },
                            {
                                text: "Kavali",
                                link: "https://www.swiggy.com/city/kavali",
                            },
                            {
                                text: "Tezpur",
                                link: "https://www.swiggy.com/city/tezpur",
                            },
                            {
                                text: "Kayamkulam",
                                link: "https://www.swiggy.com/city/kayamkulam",
                            },
                            {
                                text: "Kottarakkara",
                                link: "https://www.swiggy.com/city/kottarakkara",
                            },
                            {
                                text: "Mandi Dabwali",
                                link: "https://www.swiggy.com/city/mandi-dabwali",
                            },
                            {
                                text: "Fatehabad",
                                link: "https://www.swiggy.com/city/fatehabad",
                            },
                            {
                                text: "Jagraon",
                                link: "https://www.swiggy.com/city/jagraon",
                            },
                            {
                                text: "Mansa",
                                link: "https://www.swiggy.com/city/mansa",
                            },
                            {
                                text: "Pinjore City",
                                link: "https://www.swiggy.com/city/pinjore-city",
                            },
                            {
                                text: "Fazilka",
                                link: "https://www.swiggy.com/city/fazilka",
                            },
                            {
                                text: "Baddi",
                                link: "https://www.swiggy.com/city/baddi",
                            },
                            {
                                text: "Solan",
                                link: "https://www.swiggy.com/city/solan",
                            },
                            {
                                text: "Daltonganj",
                                link: "https://www.swiggy.com/city/daltonganj",
                            },
                            {
                                text: "Balangir",
                                link: "https://www.swiggy.com/city/balangir",
                            },
                            {
                                text: "Paonta Sahib",
                                link: "https://www.swiggy.com/city/paonta-sahib",
                            },
                            {
                                text: "Kothagudem",
                                link: "https://www.swiggy.com/city/kothagudem",
                            },
                            {
                                text: "Hansi",
                                link: "https://www.swiggy.com/city/hansi",
                            },
                            {
                                text: "Aurangabad_Bihar",
                                link: "https://www.swiggy.com/city/aurangabadbihar",
                            },
                            {
                                text: "Charkhi Dadri",
                                link: "https://www.swiggy.com/city/charkhi-dadri",
                            },
                            {
                                text: "Gopalganj",
                                link: "https://www.swiggy.com/city/gopalganj",
                            },
                            {
                                text: "Jharsuguda",
                                link: "https://www.swiggy.com/city/jharsuguda",
                            },
                            {
                                text: "Tohana",
                                link: "https://www.swiggy.com/city/tohana",
                            },
                            {
                                text: "Jhalawar",
                                link: "https://www.swiggy.com/city/jhalawar",
                            },
                            {
                                text: "Sivasagar",
                                link: "https://www.swiggy.com/city/sivasagar",
                            },
                            {
                                text: "Bagdogra",
                                link: "https://www.swiggy.com/city/bagdogra",
                            },
                            {
                                text: "Angul",
                                link: "https://www.swiggy.com/city/angul",
                            },
                            {
                                text: "Kendrapada",
                                link: "https://www.swiggy.com/city/kendrapada",
                            },
                            {
                                text: "Mallapuram (Do not Use)",
                                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
                            },
                            {
                                text: "Veraval",
                                link: "https://www.swiggy.com/city/veraval",
                            },
                            {
                                text: "Daman",
                                link: "https://www.swiggy.com/city/daman",
                            },
                            {
                                text: "Chiplun",
                                link: "https://www.swiggy.com/city/chiplun",
                            },
                            {
                                text: "Silvassa",
                                link: "https://www.swiggy.com/city/silvassa",
                            },
                            {
                                text: "Bapatla&Chirala",
                                link: "https://www.swiggy.com/city/bapatla-and-chirala",
                            },
                            {
                                text: "Lonavla",
                                link: "https://www.swiggy.com/city/lonavla",
                            },
                            {
                                text: "Bongaigaon",
                                link: "https://www.swiggy.com/city/bongaigaon",
                            },
                            {
                                text: "Golaghat",
                                link: "https://www.swiggy.com/city/golaghat",
                            },
                            {
                                text: "Duliajan",
                                link: "https://www.swiggy.com/city/duliajan",
                            },
                            {
                                text: "Ramnagar",
                                link: "https://www.swiggy.com/city/ramnagar",
                            },
                            {
                                text: "Bolpur",
                                link: "https://www.swiggy.com/city/bolpur",
                            },
                            {
                                text: "Madhubani",
                                link: "https://www.swiggy.com/city/madhubani",
                            },
                            {
                                text: "Balasore",
                                link: "https://www.swiggy.com/city/balasore",
                            },
                            {
                                text: "Palampur",
                                link: "https://www.swiggy.com/city/palampur",
                            },
                            {
                                text: "Kotdwar",
                                link: "https://www.swiggy.com/city/kotdwar",
                            },
                            {
                                text: "Koppal",
                                link: "https://www.swiggy.com/city/koppal",
                            },
                            {
                                text: "Chikhli",
                                link: "https://www.swiggy.com/city/chikhli",
                            },
                            {
                                text: "Dahanu",
                                link: "https://www.swiggy.com/city/dahanu",
                            },
                            {
                                text: "Itanagar",
                                link: "https://www.swiggy.com/city/itanagar",
                            },
                            {
                                text: "Rangpo",
                                link: "https://www.swiggy.com/city/rangpo",
                            },
                            {
                                text: "Aizawl",
                                link: "https://www.swiggy.com/city/aizawl",
                            },
                            {
                                text: "Gangtok",
                                link: "https://www.swiggy.com/city/gangtok",
                            },
                            {
                                text: "Mayiladuthurai",
                                link: "https://www.swiggy.com/city/mayiladuthurai",
                            },
                            {
                                text: "Kannauj",
                                link: "https://www.swiggy.com/city/kannauj",
                            },
                            {
                                text: "Cooch Behar",
                                link: "https://www.swiggy.com/city/cooch-behar",
                            },
                            {
                                text: "Jaigaon",
                                link: "https://www.swiggy.com/city/jaigaon",
                            },
                            {
                                text: "Palani",
                                link: "https://www.swiggy.com/city/palani",
                            },
                            {
                                text: "Bilimora",
                                link: "https://www.swiggy.com/city/bilimora",
                            },
                            {
                                text: "Udhampur",
                                link: "https://www.swiggy.com/city/udhampur",
                            },
                            {
                                text: "Boisar",
                                link: "https://www.swiggy.com/city/boisar",
                            },
                            {
                                text: "Kohima",
                                link: "https://www.swiggy.com/city/kohima",
                            },
                            {
                                text: "Naharlagun",
                                link: "https://www.swiggy.com/city/naharlagun",
                            },
                            {
                                text: "Dumka",
                                link: "https://www.swiggy.com/city/dumka",
                            },
                            {
                                text: "Rajsamand",
                                link: "https://www.swiggy.com/city/rajsamand",
                            },
                            {
                                text: "Gauriganj",
                                link: "https://www.swiggy.com/city/gauriganj",
                            },
                            {
                                text: "Bodinayakanur",
                                link: "https://www.swiggy.com/city/bodinayakanur",
                            },
                            {
                                text: "Bhawanipatna",
                                link: "https://www.swiggy.com/city/bhawanipatna",
                            },
                            {
                                text: "Baran",
                                link: "https://www.swiggy.com/city/baran",
                            },
                            {
                                text: "Narsinghpur",
                                link: "https://www.swiggy.com/city/narsinghpur",
                            },
                            {
                                text: "Uran Islampur",
                                link: "https://www.swiggy.com/city/uran-islampur",
                            },
                            {
                                text: "Kovilpatti",
                                link: "https://www.swiggy.com/city/kovilpatti",
                            },
                            {
                                text: "Kasaragod",
                                link: "https://www.swiggy.com/city/kasaragod",
                            },
                            {
                                text: "Pusad",
                                link: "https://www.swiggy.com/city/pusad",
                            },
                            {
                                text: "Kendujhar",
                                link: "https://www.swiggy.com/city/kendujhar",
                            },
                            {
                                text: "Manali",
                                link: "https://www.swiggy.com/city/manali",
                            },
                            {
                                text: "Diu",
                                link: "https://www.swiggy.com/city/diu",
                            },
                            {
                                text: "Khamgaon",
                                link: "https://www.swiggy.com/city/khamgaon",
                            },
                            {
                                text: "Ramanagara",
                                link: "https://www.swiggy.com/city/ramanagara",
                            },
                            {
                                text: "Alipurduar",
                                link: "https://www.swiggy.com/city/alipurduar",
                            },
                            {
                                text: "Almora",
                                link: "https://www.swiggy.com/city/almora",
                            },
                            {
                                text: "Jhargram",
                                link: "https://www.swiggy.com/city/jhargram",
                            },
                            {
                                text: "Arambagh",
                                link: "https://www.swiggy.com/city/arambagh",
                            },
                            {
                                text: "Bhadohi",
                                link: "https://www.swiggy.com/city/bhadohi",
                            },
                            {
                                text: "Tenkasi",
                                link: "https://www.swiggy.com/city/tenkasi",
                            },
                            {
                                text: "Srivilliputhur",
                                link: "https://www.swiggy.com/city/srivilliputhur",
                            },
                            {
                                text: "Chidambaram",
                                link: "https://www.swiggy.com/city/chidambaram",
                            },
                            {
                                text: "Rajgarh",
                                link: "https://www.swiggy.com/city/rajgarh",
                            },
                            {
                                text: "Pratapgarh",
                                link: "https://www.swiggy.com/city/pratapgarh",
                            },
                            {
                                text: "Washim",
                                link: "https://www.swiggy.com/city/washim",
                            },
                            {
                                text: "Mandi HP",
                                link: "https://www.swiggy.com/city/mandi-hp",
                            },
                            {
                                text: "Ranaghat",
                                link: "https://www.swiggy.com/city/ranaghat",
                            },
                            {
                                text: "Raghunathpur",
                                link: "https://www.swiggy.com/city/raghunathpur",
                            },
                            {
                                text: "Suri",
                                link: "https://www.swiggy.com/city/suri",
                            },
                            {
                                text: "Kadayanallur",
                                link: "https://www.swiggy.com/city/kadayanallur",
                            },
                            {
                                text: "Thiruvarur",
                                link: "https://www.swiggy.com/city/thiruvarur",
                            },
                            {
                                text: "Ranaghat-WB",
                                link: "https://www.swiggy.com/city/ranaghat-wb",
                            },
                            {
                                text: "Idukki",
                                link: "https://www.swiggy.com/city/idukki",
                            },
                            {
                                text: "Wayanad",
                                link: "https://www.swiggy.com/city/wayanad",
                            },
                            {
                                text: "Perambalur",
                                link: "https://www.swiggy.com/city/perambalur",
                            },
                            {
                                text: "Paramakudi",
                                link: "https://www.swiggy.com/city/paramakudi",
                            },
                            {
                                text: "Khopoli",
                                link: "https://www.swiggy.com/city/khopoli",
                            },
                            {
                                text: "Bela Pratapgarh",
                                link: "https://www.swiggy.com/city/bela-pratapgarh",
                            },
                            {
                                text: "Mahoba",
                                link: "https://www.swiggy.com/city/mahoba",
                            },
                            {
                                text: "Sitamarhi",
                                link: "https://www.swiggy.com/city/sitamarhi",
                            },
                            {
                                text: "Chakdaha",
                                link: "https://www.swiggy.com/city/chakdaha",
                            },
                            {
                                text: "Khalilabad",
                                link: "https://www.swiggy.com/city/khalilabad",
                            },
                            {
                                text: "Pattukkottai",
                                link: "https://www.swiggy.com/city/pattukkottai",
                            },
                            {
                                text: "Tindivanam",
                                link: "https://www.swiggy.com/city/tindivanam",
                            },
                            {
                                text: "Tiruttani",
                                link: "https://www.swiggy.com/city/tiruttani",
                            },
                            {
                                text: "Gangarampur",
                                link: "https://www.swiggy.com/city/gangarampur",
                            },
                            {
                                text: "Dharapuram",
                                link: "https://www.swiggy.com/city/dharapuram",
                            },
                            {
                                text: "Arakkonam",
                                link: "https://www.swiggy.com/city/arakkonam",
                            },
                            {
                                text: "Sirkali",
                                link: "https://www.swiggy.com/city/sirkali",
                            },
                            {
                                text: "Aruppukottai",
                                link: "https://www.swiggy.com/city/aruppukottai",
                            },
                            {
                                text: "Mettupalayam",
                                link: "https://www.swiggy.com/city/mettupalayam",
                            },
                            {
                                text: "Digboi",
                                link: "https://www.swiggy.com/city/digboi",
                            },
                            {
                                text: "Biswanath Chariali",
                                link: "https://www.swiggy.com/city/biswanath-chariali",
                            },
                            {
                                text: "Nalbari",
                                link: "https://www.swiggy.com/city/nalbari",
                            },
                            {
                                text: "Shirdi city",
                                link: "https://www.swiggy.com/city/shirdi-city",
                            },
                            {
                                text: "Mukerian",
                                link: "https://www.swiggy.com/city/mukerian",
                            },
                            {
                                text: "Hosur",
                                link: "https://www.swiggy.com/city/hosur",
                            },
                            {
                                text: "Palakollu",
                                link: "https://www.swiggy.com/city/palakollu",
                            },
                            {
                                text: "Amalapuram",
                                link: "https://www.swiggy.com/city/amalapuram",
                            },
                            {
                                text: "Ravulapalem",
                                link: "https://www.swiggy.com/city/ravulapalem",
                            },
                            {
                                text: "Narsipatnam",
                                link: "https://www.swiggy.com/city/narsipatnam",
                            },
                            {
                                text: "Barh",
                                link: "https://www.swiggy.com/city/barh",
                            },
                            {
                                text: "Palghar",
                                link: "https://www.swiggy.com/city/palghar",
                            },
                            {
                                text: "Shahdol",
                                link: "https://www.swiggy.com/city/shahdol",
                            },
                            {
                                text: "Kushalnagar",
                                link: "https://www.swiggy.com/city/kushalnagar",
                            },
                            {
                                text: "Dungarpur",
                                link: "https://www.swiggy.com/city/dungarpur",
                            },
                            {
                                text: "Chaibasa",
                                link: "https://www.swiggy.com/city/chaibasa",
                            },
                            {
                                text: "Haveri",
                                link: "https://www.swiggy.com/city/haveri",
                            },
                            {
                                text: "Karaikal",
                                link: "https://www.swiggy.com/city/karaikal",
                            },
                            {
                                text: "Jjajjar",
                                link: "https://www.swiggy.com/city/jjajjar",
                            },
                            {
                                text: "Kokrajhar",
                                link: "https://www.swiggy.com/city/kokrajhar",
                            },
                            {
                                text: "Rangia",
                                link: "https://www.swiggy.com/city/rangia",
                            },
                            {
                                text: "Hamirpur",
                                link: "https://www.swiggy.com/city/hamirpur",
                            },
                            {
                                text: "Una",
                                link: "https://www.swiggy.com/city/una",
                            },
                            {
                                text: "Sulthan Bathery",
                                link: "https://www.swiggy.com/city/sulthan-bathery",
                            },
                            {
                                text: "Rayagada",
                                link: "https://www.swiggy.com/city/rayagada",
                            },
                            {
                                text: "Paradeep",
                                link: "https://www.swiggy.com/city/paradeep",
                            },
                            {
                                text: "Mandapeta",
                                link: "https://www.swiggy.com/city/mandapeta",
                            },
                            {
                                text: "Jamui",
                                link: "https://www.swiggy.com/city/jamui",
                            },
                            {
                                text: "Pilkhuwa",
                                link: "https://www.swiggy.com/city/pilkhuwa",
                            },
                            {
                                text: "Parvathipuram",
                                link: "https://www.swiggy.com/city/parvathipuram",
                            },
                            {
                                text: "Ambajogai",
                                link: "https://www.swiggy.com/city/ambajogai",
                            },
                            {
                                text: "Araria",
                                link: "https://www.swiggy.com/city/araria",
                            },
                            {
                                text: "North Lakhimpur",
                                link: "https://www.swiggy.com/city/north-lakhimpur",
                            },
                            {
                                text: "Rajampet",
                                link: "https://www.swiggy.com/city/rajampet",
                            },
                            {
                                text: "Udumalaipettai",
                                link: "https://www.swiggy.com/city/udumalaipettai",
                            },
                            {
                                text: "Tirupattur",
                                link: "https://www.swiggy.com/city/tirupattur",
                            },
                            {
                                text: "Hojai",
                                link: "https://www.swiggy.com/city/hojai",
                            },
                            {
                                text: "Khagaria",
                                link: "https://www.swiggy.com/city/khagaria",
                            },
                            {
                                text: "Dasuya",
                                link: "https://www.swiggy.com/city/dasuya",
                            },
                            {
                                text: "Gudur",
                                link: "https://www.swiggy.com/city/gudur",
                            },
                            {
                                text: "Sullurpeta",
                                link: "https://www.swiggy.com/city/sullurpeta",
                            },
                            {
                                text: "Piler",
                                link: "https://www.swiggy.com/city/piler",
                            },
                            {
                                text: "SankaranKoil",
                                link: "https://www.swiggy.com/city/sankarankoil",
                            },
                            {
                                text: "Nabha",
                                link: "https://www.swiggy.com/city/nabha",
                            },
                            {
                                text: "LPU - Phagwara",
                                link: "https://www.swiggy.com/city/lpu-phagwara",
                            },
                            {
                                text: "Jangipur",
                                link: "https://www.swiggy.com/city/jangipur",
                            },
                            {
                                text: "Roha",
                                link: "https://www.swiggy.com/city/roha",
                            },
                            {
                                text: "Maharajganj",
                                link: "https://www.swiggy.com/city/maharajganj",
                            },
                            {
                                text: "Kallakurichi",
                                link: "https://www.swiggy.com/city/kallakurichi",
                            },
                            {
                                text: "Kalimpong",
                                link: "https://www.swiggy.com/city/kalimpong",
                            },
                            {
                                text: "Sundernagar",
                                link: "https://www.swiggy.com/city/sundernagar",
                            },
                            {
                                text: "Nawada",
                                link: "https://www.swiggy.com/city/nawada",
                            },
                            {
                                text: "Forbesganj",
                                link: "https://www.swiggy.com/city/forbesganj",
                            },
                            {
                                text: "Mokameh Khas",
                                link: "https://www.swiggy.com/city/mokameh-khas",
                            },
                            {
                                text: "Bazpur",
                                link: "https://www.swiggy.com/city/bazpur",
                            },
                            {
                                text: "Lakhisarai",
                                link: "https://www.swiggy.com/city/lakhisarai",
                            },
                            {
                                text: "Rameswaram",
                                link: "https://www.swiggy.com/city/rameswaram",
                            },
                            {
                                text: "Sahjanwa",
                                link: "https://www.swiggy.com/city/sahjanwa",
                            },
                            {
                                text: "Siddharthnagar",
                                link: "https://www.swiggy.com/city/siddharthnagar",
                            },
                            {
                                text: "Nanjangud",
                                link: "https://www.swiggy.com/city/nanjangud",
                            },
                            {
                                text: "Chamarajanagar",
                                link: "https://www.swiggy.com/city/chamarajanagar",
                            },
                            {
                                text: "Kurali",
                                link: "https://www.swiggy.com/city/kurali",
                            },
                            {
                                text: "Sundar Nagar",
                                link: "https://www.swiggy.com/city/sundar-nagar",
                            },
                            {
                                text: "Bobbili",
                                link: "https://www.swiggy.com/city/bobbili",
                            },
                            {
                                text: "Jangaon",
                                link: "https://www.swiggy.com/city/jangaon",
                            },
                            {
                                text: "Banswara",
                                link: "https://www.swiggy.com/city/banswara",
                            },
                            {
                                text: "Sundergarh",
                                link: "https://www.swiggy.com/city/sundergarh",
                            },
                            {
                                text: "Godda",
                                link: "https://www.swiggy.com/city/godda",
                            },
                            {
                                text: "Madhupur",
                                link: "https://www.swiggy.com/city/madhupur",
                            },
                            {
                                text: "Katwa",
                                link: "https://www.swiggy.com/city/katwa",
                            },
                            {
                                text: "Dhupguri",
                                link: "https://www.swiggy.com/city/dhupguri",
                            },
                            {
                                text: "Contai",
                                link: "https://www.swiggy.com/city/contai",
                            },
                            {
                                text: "Baramulla",
                                link: "https://www.swiggy.com/city/baramulla",
                            },
                            {
                                text: "Kangeyam",
                                link: "https://www.swiggy.com/city/kangeyam",
                            },
                            {
                                text: "Naugachia",
                                link: "https://www.swiggy.com/city/naugachia",
                            },
                            {
                                text: "Madhepura",
                                link: "https://www.swiggy.com/city/madhepura",
                            },
                            {
                                text: "Jamkhambhaliya",
                                link: "https://www.swiggy.com/city/jamkhambhaliya",
                            },
                            {
                                text: "Mundra",
                                link: "https://www.swiggy.com/city/mundra",
                            },
                            {
                                text: "Patan",
                                link: "https://www.swiggy.com/city/patan",
                            },
                            {
                                text: "Mahuva",
                                link: "https://www.swiggy.com/city/mahuva",
                            },
                            {
                                text: "Attur",
                                link: "https://www.swiggy.com/city/attur",
                            },
                            {
                                text: "Pen",
                                link: "https://www.swiggy.com/city/pen",
                            },
                            {
                                text: "Mandla",
                                link: "https://www.swiggy.com/city/mandla",
                            },
                            {
                                text: "Sidhi",
                                link: "https://www.swiggy.com/city/sidhi",
                            },
                            {
                                text: "Lakshadweep",
                                link: "https://www.swiggy.com/city/lakshadweep",
                            },
                            {
                                text: "Chitrakoot",
                                link: "https://www.swiggy.com/city/chitrakoot",
                            },
                            {
                                text: "Rajam",
                                link: "https://www.swiggy.com/city/rajam",
                            },
                            {
                                text: "Nippani",
                                link: "https://www.swiggy.com/city/nippani",
                            },
                            {
                                text: "Sankeshwar",
                                link: "https://www.swiggy.com/city/sankeshwar",
                            },
                            {
                                text: "Chikkodi",
                                link: "https://www.swiggy.com/city/chikkodi",
                            },
                            {
                                text: "Modasa",
                                link: "https://www.swiggy.com/city/modasa",
                            },
                            {
                                text: "Bavla",
                                link: "https://www.swiggy.com/city/bavla",
                            },
                            {
                                text: "Puttur_AP",
                                link: "https://www.swiggy.com/city/puttur-ap",
                            },
                            {
                                text: "Sinnar",
                                link: "https://www.swiggy.com/city/sinnar",
                            },
                            {
                                text: "singur",
                                link: "https://www.swiggy.com/city/singur",
                            },
                            {
                                text: "Nelamangala",
                                link: "https://www.swiggy.com/city/nelamangala",
                            },
                            {
                                text: "Srinagar Uttarakhand",
                                link: "https://www.swiggy.com/city/srinagar-uttarakhand",
                            },
                            {
                                text: "Dhampur",
                                link: "https://www.swiggy.com/city/dhampur",
                            },
                        ],
                        id: "footer_content",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
                        citySlug: "bhubaneswar",
                        lat: "20.344743",
                        lng: "85.80381799999999",
                        userAgent:
                            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
                        gandalfRequest:
                            '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-a372d7d6-1957-4fa0-89b5-41c548d902d5","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE","businessLine":"FOOD"}}',
                        id: "meta_data",
                        metaInfo: {
                            pageType: "FOOD_HOME_PAGE",
                            pageTitle:
                                "Order Food Online from India's Best Food Delivery Service | Swiggy",
                            pageMetaDescription:
                                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
                            pageKeywords:
                                "Food delivery, Online food order, Online food dleivery",
                        },
                        screenType: "filteredCollection",
                        seoParams: {
                            apiName: "FoodHomePage",
                            seoUrl: "www.swiggy.com",
                            pageType: "FOOD_HOME_PAGE",
                            businessLine: "FOOD",
                        },
                        pageContext: {
                            citySlug: "bhubaneswar",
                            cityName: "Bhubaneswar",
                            pageType: "FOOD_HOME_PAGE",
                        },
                    },
                },
            },
        ],
        firstOffsetRequest: true,
        cacheExpiryTime: 240,
        nextFetch: 1,
    },
    tid: "eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3ODY5NjIyMzEsImlhdCI6MTc4Njk1ODYzMSwic2Vzc2lvbl9kYXRhIjoiYWNmZmZGV2w3Rmx6UTlCMlVZdEtGVTdYS0F5UEdMc1JXZG82YThxcCtROURFNVh0cU9Za1gzZjBxbVJ5by82QkRMRlMvei9wYmg4K1A5MXJ2Q2ltWFRLK1czaGdibDFvNmFvaWxEYmRmZVRmNzRxRzJDS1ZpaXBqemE4bWpmRldKNFVVKy90L0NCSTlQdnc3alc3TnBiNmh0ODVYZ3VFdUhhLyt4cGlGWjJRTXlDcG10Tng1YzFkMUh4REhwYW40Q1B2djRKOFdyWFRDODI5MVpZOFhQdz09Iiwic2lkIjoidDNxZjJkMjIzNDEtY2E0Yy00M2MyLWFkYjQtYmI2YzMwZGM4Iiwic3ViIjoiN2E3ODNjM2QtMzhmMC00ZTVmLWE4NmMtNjlmYzMwN2MxYjIzIiwidXNlcl9pZCI6IjAifQ.73Ni_3P0sUJIeYKMbBTYJzenObMo7yjS8IgdR9ziWVk",
    sid: "t3qf2d22341-ca4c-43c2-adb4-bb6c30dc8",
    deviceId: "eff8562a-2511-73f6-2473-9b84f09fd32a",
    csrfToken: "5linyD6BbBee-H0CyTg28dzFWt6T8jokYUbrh1dY",
};