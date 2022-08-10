import "./App.css";
import { ProductPage } from "./Screens/ProductPage.js";
import { useState, useEffect } from "react";
import FeaturedProduct from "./Images/FeaturedProduct.png";

let mockFeaturedProduct = {
  id: 325980,
  title: "The Dandy Chair",
  price: 250,
  description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  features: [
    "Premium material",
    "Handmade upholstery",
    "Quality timeless classic",
  ],
  dimensions: {
    unit: "cm",
    height: 110,
    width: 75,
    depth: 50,
  },
  image: FeaturedProduct,
};

function App() {
  let [product, setProduct] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
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
