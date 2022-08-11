import { MainLink } from "./MainLink";
import { SideAction } from "./SideAction";
import Search from "../Images/Search.png";
import ShoppingCart from "../Images/ShoppingCart.png";
import UserAvatar from "../Images/UserAvatar.png";
import '../CSS/NavBar.css'
import '../CSS/Styles/Text.css'

const NavBar = () => {
  return (
    <nav>
      <ul className='nav-bar__nav_list'>
        <li className="nav-bar__left_container">
          <p className="nav-bar__title headline3">Avion</p>
          <div className="nav-bar__main_links">
            <MainLink name="Plant Pots" />
            <MainLink name="Ceramics" />
            <MainLink name="Tables" />
            <MainLink name="Chairs" />
            <MainLink name="Crockery" />
            <MainLink name="Tableware" />
            <MainLink name="Cutlery" />
          </div>
        </li>
        <li className="nav-bar__side_actions">
          <SideAction image={Search} desc="search" />
          <SideAction image={ShoppingCart} desc="shoppingCart" />
          <SideAction image={UserAvatar} desc="userAvatar" />
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
