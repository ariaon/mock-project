import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";
import "../CSS/BrandFeature.css";

const BrandFeature = (props) => {
  return (
    <div>
      <img
        className="brand-feature__image"
        src={props.image}
        alt={props.altText}
      ></img>
      <p className="headline4 dark-primary brand-feature__name">{props.name}</p>
      <p className="bodyM dark-primary brand-feature__desc">{props.desc}</p>
    </div>
  );
};

export { BrandFeature };
