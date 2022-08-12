import { useState, useEffect } from "react";
import "../CSS/Styles/Text.css";
import "../CSS/Styles/ColorPallete.css";
import "../CSS/AddCart.css";
import { breakpointMobile } from "../Utils/breakpoints";

const AddCart = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const decrementOnClick = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementOnClick = () => {
    if (quantity < 100) setQuantity(quantity + 1);
  };

  return (
    <div className="add-cart">
      <p className="headline5 add-cart__amount_text">{width >= breakpointMobile ? 'Amount:' : 'Quantity'}</p>
      <div className="add-cart__stepper">
        <button className="add-cart__change_btn" onClick={decrementOnClick}>
          <p className="border-dark add-cart__change_symbol">-</p>
        </button>
        <p className="dark-primary add-cart__quantity_text">{quantity}</p>
        <button className="add-cart__change_btn" onClick={incrementOnClick}>
          <p className="border-dark add-cart__change_symbol">+</p>
        </button>
      </div>
      <button className="add-cart__add_btn">
        <p className="bodyM white add-cart__add_text">Add to Cart</p>
      </button>
    </div>
  );
};

export { AddCart };
