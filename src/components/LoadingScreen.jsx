const LoadingScreen = () => (
    <div className="loading-screen" role="status" aria-live="polite">
        <div className="restaurant-skeletons" aria-hidden="true">
            {[0, 1, 2].map((card) => (
                <div className="restaurant-skeleton" key={card}>
                    <div className="skeleton-image" />
                    <div className="skeleton-line skeleton-title" />
                    <div className="skeleton-line skeleton-detail" />
                    <div className="skeleton-line skeleton-detail short" />
                </div>
            ))}
        </div>
        <p>Loading restaurants near you...</p>
    </div>
);

export default LoadingScreen;
