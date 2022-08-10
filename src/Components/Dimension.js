import { bodyM, headline6 } from "../Styles/Text";

const Dimension = (props) => {
    return (
      <div>
        <p style={styles.type}>{props.type}</p>
        <p style={styles.value}>{props.value}{props.unit}</p>
      </div>
    );
  };
  
  export { Dimension };
  
  const styles = {
    type: {
        ...headline6,
        fontFamily: "Clash Display, sans-serif",
        color: "#2A254B"
    },
    value: {
        ...bodyM,
        fontFamily: "Satoshi, sans-serif",
        color: "#505977"
    }
  };
  