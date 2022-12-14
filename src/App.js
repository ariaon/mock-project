import "./App.css";
import { ProductPage } from "./Screens/ProductPage.js";
import { useState, useEffect } from "react";

function App() {
  let [product, setProduct] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/13")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="App">
      <ProductPage product={product}/>
    </div>
  );
}

export default App;
