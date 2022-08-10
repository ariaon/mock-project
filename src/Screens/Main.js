import { NavBar } from "../Components/NavBar.js";
import { ProductView } from "../Components/ProductView.js";
import FeaturedProduct from "../Images/FeaturedProduct.png";

const mockRegion = {
  region: "EU",
  timeZone: "PST",
};

let mockFeaturedProduct = {
  id: 325980,
  name: "The Dandy Chair",
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

const Home = () => {
  return (
    <div>
      <NavBar />
      <ProductView {...mockRegion} {...mockFeaturedProduct} />
    </div>
  );
};

export { Home };
