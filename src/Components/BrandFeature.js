import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";
import "../CSS/BrandFeature.css";
import { breakpointTablet } from "../Utils/breakpoints";

const BrandFeature = (props) => {
  return (
    <div>
      <img
        className="brand-feature__image"
        src={props.image}
        alt={props.altText}
      ></img>
      <p
        className={
          props.width >= breakpointTablet
            ? "headline4 dark-primary brand-feature__name"
            : "headline5 dark-primary brand-feature__name"
        }
      >
        {props.name}
      </p>
      <p
        className={
          props.width >= breakpointTablet
            ? "bodyM dark-primary brand-feature__desc"
            : "bodyS dark-primary brand-feature__desc"
        }
      >
        {props.desc}
      </p>
    </div>
  );
};

export { BrandFeature };
