import "../../index.css";

const OfferCard = ({ deal }) => {
    const { info } = deal;
    return (
        <div className="deal-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.offerLogo} alt={info?.header} className="deal-img" />
            <div className="deal-desc">
                <h4>{info?.header}</h4>
                <p style={{ color: "#9e9ea1ff" }}>{info?.description}</p>
            </div>
        </div>
    )
};

export default OfferCard;