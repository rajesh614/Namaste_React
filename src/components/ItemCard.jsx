import { useState } from "react";

const ItemCard = ({ item }) => {

    const [expandedDescs, setExpandedDescs] = useState({});
    const [cartCounter, setCartCounter] = useState(0);

    const desc = item.card.info.description || "";
    const isExpanded = expandedDescs[item.card.info.id];
    const MAX_LENGTH = 110;

    return (
        <>
            <div className="items-card" key={item.card.info.id}>
                <div className="item-desc">
                    <h3>{item.card.info.name}</h3>
                    <p>₹{(item.card.info.price || item.card.info.defaultPrice) / 100 || ""}</p>
                    <p>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#24963F" stroke="#24963F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span style={{ marginLeft: "5px" }}>
                            {item.card.info.ratings.aggregatedRating.rating}
                        </span>
                        <span style={{ color: "gray", marginLeft: "5px" }}>
                            ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                        </span>
                    </p>
                    <p style={{ color: "gray", fontSize: "14px", marginTop: "8px" }}>
                        {desc.length > MAX_LENGTH && !isExpanded
                            ? (
                                <>
                                    {desc.substring(0, MAX_LENGTH)}
                                    <span
                                        style={{ fontWeight: "550", color: "#444", cursor: "pointer", marginLeft: "2px" }}
                                        onClick={() => setExpandedDescs({ ...expandedDescs, [item.card.info.id]: true })}
                                    >
                                        ...more
                                    </span>
                                </>
                            )
                            : desc
                        }
                    </p>
                </div>
                <div className="item-image-wrapper">
                    <img className="item-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`} />
                    <button className="add-button" onClick={() => { setCartCounter(cartCounter + 1) }}>
                        ADD
                    </button>
                </div>
            </div>
            <hr style={{ margin: "24px 0", border: "none", borderBottom: "1px solid #e3e0e0ff" }} />
        </>
    )
};

export default ItemCard;