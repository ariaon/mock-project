import { useState, useEffect } from "react";
import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";
import "../CSS/BrandBanner.css";
import { breakpointTablet } from "../Utils/breakpoints";
import { BrandFeature } from "./BrandFeature";
import Delivery from "../Images/Delivery.png";
import CheckmarkOutline from "../Images/CheckmarkOutline.png";
import Purchase from "../Images/Purchase.png";
import Sprout from "../Images/Sprout.png";

const BrandFeatures = [
  {
    image: Delivery,
    altText: "deliveryIcon",
    name: "Next day as standard",
    desc: "Order before 3pm and get your order the next day as standard",
  },
  {
    image: CheckmarkOutline,
    name: "Made by true artisans",
    desc: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    image: Purchase,
    name: "Unbeatable prices",
    desc: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    image: Sprout,
    name: "Recycled packaging",
    desc: "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];

const BrandBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="brand-banner">
      <p
        className={
          width >= breakpointTablet
            ? "headline3 dark-primary brand-banner__title"
            : "headline4 dark-primary brand-banner__title"
        }
      >
        What makes our brand different
      </p>
      <div className="brand-banner__feat_list">
        {BrandFeatures.map((feature) => (
          <BrandFeature
            key={feature.name}
            windowWidth={width}
            image={feature.image}
            altText={feature.altText}
            name={feature.name}
            desc={feature.desc}
          />
        ))}
      </div>
    </div>
  );
};

export { BrandBanner };
