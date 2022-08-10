import { headline4, bodyM } from "../Styles/Text";
import { darkPrimary } from "../Styles/ColorPallete";

const BrandFeature = (props) => {
    return (
      <div style={styles.container}>
        <img style={styles.image} src={props.image} alt={props.altText}></img>
        <p style={styles.name}>{props.name}</p>
        <p style={styles.desc}>{props.desc}</p>
      </div>
    );
  };
  
  export { BrandFeature };
  
  const styles = {
    container: {
    },
    image:{
        width: 24,
        height: 24,
    },
    name: {
        ...headline4,
        color: darkPrimary,
        marginTop: "5%",
        marginBottom: 0,
    },
    desc: {
        ...bodyM,
        color: darkPrimary,
        width: '27ch',
        marginTop: "5%",
        marginBottom: 0,
    }
  };
  