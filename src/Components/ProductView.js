import { Dimension } from "./Dimension";
import { AddCart } from "./AddCart";
import { headline1, headline3, headline5, bodyM } from "../Styles/Text";
import { regionMonetarySymbol } from "../Utils/regionConversion";

const ProductView = (props) => {
  return (
    <div style={styles.container}>
      <img src={props.image} style={styles.image} alt="productImage" />
      <div style={styles.details}>
        <p style={styles.name}>{props.name}</p>
        <p style={styles.price}>
          {regionMonetarySymbol(props.region)}
          {props.price}
        </p>
        {props.description && (
          <div style={styles.description}>
            <p style={styles.descriptionTitle}>Description</p>
            <div style={styles.descriptionBody}>
              <p>{props.description}</p>
              <ul>
                {props.features &&
                  props.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </div>
        )}
        {props.dimensions && (
          <div style={styles.dimensions}>
            <p style={styles.dimensionsTitle}>Dimensions</p>
            <div style={styles.metrics}>
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
          <AddCart id={props.id} region={props.region} price={props.price}/>
      </div>
    </div>
  );
};

export { ProductView };

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height: "auto",
  },
  details: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  name: {
    ...headline1,
    fontFamily: "Clash Display, sans-serif",
    color: '#2A254B'
  },
  price: {
    ...headline3,
    fontFamily: "Satoshi, sans-serif",
    color: '#12131A'
  },
  description: {
    paddingTop: "7%",
  },
  descriptionTitle: {
    ...headline5,
    fontFamily: "Clash Display, sans-serif",
    color: '#2A254B'
  },
  descriptionBody: {
    ...bodyM,
    fontFamily: "Satoshi, sans-serif",
    color: "#505977"
  },
  dimensions: {
    paddingTop: "7%",
  },
  dimensionsTitle: {
    ...headline5,
    fontFamily: "Clash Display, sans-serif",
    color: "#2A254B"
  },
  metrics: {
    display: 'flex',
    gap: '10%'
  },
  
  amountText: {
    ...headline5,
    fontFamily: "Clash Display, sans-serif",
  }
};
