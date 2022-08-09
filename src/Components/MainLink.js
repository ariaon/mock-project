import { headline5 } from "../Styles/Text";

const MainLink = (props) => {
  return (
    <p style={styles.text}>{props.name}</p>
  );
};

export { MainLink };

const styles = {
  text: {
    ...headline5,
    marginBottom: 0,
    color: "#726E8D",
    fontFamily: "Satoshi, sans-serif",
  }
};
