import "./FeatureBlock.scss";

function FeatureBlock({ iconPath, iconAltText, featureText }) {
    return (
        <div className="feature-block">
            <img
                className="feaure-block__icon"
                src={iconPath}
                alt={iconAltText}
            />
            <span className="feature-block__text">{featureText}</span>
        </div>
    );
}

export default FeatureBlock;
