import "./FeatureInline.scss";

function FeatureInline({ iconPath, iconAltText, featureText }) {
    return (
        <div className="feature-inline">
            <img
                className="feature-inline__icon"
                src={iconPath}
                alt={iconAltText}
            />
            <span className="feature-inline__text">{featureText}</span>
        </div>
    );
}

export default FeatureInline;
