import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";

const Dimension = (props) => {
  return (
    <div>
      <p className="headline6 dark-primary">{props.type}</p>
      <p className="dimension__value">
        {props.value}
        {props.unit}
      </p>
    </div>
  );
};

export { Dimension };
