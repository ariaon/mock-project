import { headline3 } from "../Styles/Text";
import { darkPrimary } from "../Styles/ColorPallete";
import { BrandFeature } from "./BrandFeature";
import Delivery from "../Images/Delivery.png";
import CheckmarkOutline from "../Images/CheckmarkOutline.png";
import Purchase from "../Images/Purchase.png";
import Sprout from "../Images/Sprout.png";

const BrandFeatures = [
  {
    image: Delivery,
    altText: 'deliveryIcon',
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
  return (
    <div style={styles.container}>
      <p style={styles.title}>What makes our brand different</p>
      <div style={styles.featList}>
        {BrandFeatures.map(feature => <BrandFeature image={feature.image} altText={feature.altText} name={feature.name} desc={feature.desc}/>)}
      </div>
    </div>
  );
};

export { BrandBanner };

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyItem: "center",
    alignItems: "center",
    marginTop: '3%',
  },
  title: {
    ...headline3,
    color: darkPrimary,
    marginBottom: 0,
  },
  featList:{
    display: "flex",
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: "5%",
    gap: "3%"
  }
};
