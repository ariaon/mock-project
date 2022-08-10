import { headline5, bodyM } from "../Styles/Text";
import { useState } from "react";
import { darkPrimary, primary, white, borderDark, lightGrey } from "../Styles/ColorPallete";

const AddCart = (props) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div style={styles.amount}>
      <p style={styles.amountText}>Amount:</p>
      <div style={styles.stepper}>
        <button style={styles.changeBtn}>
          <p style={styles.changeSymbol}>-</p>
        </button>
        <p style={styles.quantityText}>{quantity}</p>
        <button style={styles.changeBtn}>
          <p style={styles.changeSymbol}>+</p>
        </button>
      </div>
        <button style={styles.addBtn}><p style={styles.addText}>Add to Cart</p></button>
      
    </div>
  );
};

export { AddCart };

const styles = {
  amount: {
    display: "flex",
    alignItems: 'center',
    paddingTop: '7%'
  },
  amountText: {
    ...headline5,
    fontFamily: "Clash Display, sans-serif",
    marginRight: "7%",
    marginBottom: 0
  },
  stepper: {
    display: "flex",
    backgroundColor: lightGrey,
    alignItems: 'center',
    gap: 25,
  },
  changeBtn: {
    width: 35,
    height: 50,
    border: 'none',
    cursor: 'pointer',
    background: 'none'

  },
  changeSymbol: {
    color: borderDark,
    margin: 0
  },
  quantityText: {
    color: darkPrimary,
    marginBottom: 0
  },
  addBtn: {
    border: 'none',
    cursor: 'pointer',
    background: darkPrimary,
    stroke: primary,
    strokeWidth: 1,
    marginLeft: 'auto',
    paddingTop: 20,
    paddingRight: 50,
    paddingBottom: 20,
    paddingLeft: 50,
    alignItems: 'center',
    justifyItems: 'center'
  },
  addText: {
    ...bodyM,
    color: white,
    marginBottom: 0,
  }
};
