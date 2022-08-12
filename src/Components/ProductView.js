import { useState, useEffect } from "react";
import { Dimension } from "./Dimension";
import { AddCart } from "./AddCart";
import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";
import "../CSS/ProductView.css";
import { regionMonetarySymbol } from "../Utils/regionConversion";
import { breakpointMobile, breakpointTablet } from "../Utils/breakpoints";

const ProductView = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="product-view">
      <img
        src={props.image}
        className="product-view__product_image"
        alt="productImage"
      />
      <div className="product-view__details">
        <p
          className={
            width >= breakpointTablet
              ? "headline1 dark-primary"
              : "headline3 dark-primary"
          }
        >
          {props.title}
        </p>
        <p
          className={
            width >= breakpointTablet
              ? "headline3 product-view__price"
              : "headline4 product-view__price"
          }
        >
          {regionMonetarySymbol(props.region)}
          {props.price}
        </p>
        {props.description && (
          <div className="product-view__description">
            <p className="headline5 dark-primary">
              {width >= breakpointMobile
                ? "Description"
                : "Product Description"}
            </p>
            <div className={
            width >= breakpointTablet ? "bodyM product-view__description_body ": "bodyS product-view__description_body "}>
              <p>{props.description}</p>
              <ul>
                {props.features &&
                  props.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        {props.dimensions && (
          <div className="product-view__dimensions">
            <p className="headline5 dark-primary">Dimensions</p>
            <div className="product-view__metrics">
              <Dimension
                type="Height"
                value={props.dimensions.height}
                unit={props.dimensions.unit}
              />
              <Dimension
                type="Width"
                value={props.dimensions.width}
                unit={props.dimensions.unit}
              />
              <Dimension
                type="Depth"
                value={props.dimensions.depth}
                unit={props.dimensions.unit}
              />
            </div>
          </div>
        )}
        <AddCart id={props.id} region={props.region} price={props.price} />
      </div>
    </div>
  );
};

export { ProductView };
