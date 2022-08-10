import { NavBar } from "../Components/NavBar.js";
import { ProductView } from "../Components/ProductView.js";
import { BrandBanner } from "../Components/BrandBanner.js"

const ProductPage = (props) => {
  return (
    <div>
      <NavBar />
      <ProductView {...props.product} />
      <BrandBanner/>
    </div>
  );
};

export { ProductPage };
