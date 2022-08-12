import { useState, useEffect } from "react";
import { MainLink } from "./MainLink";
import { SideAction } from "./SideAction";
import Search from "../Images/Search.png";
import ShoppingCart from "../Images/ShoppingCart.png";
import UserAvatar from "../Images/UserAvatar.png";
import Menu from "../Images/Menu.png"
import "../CSS/NavBar.css";
import "../CSS/Styles/Text.css";
import { breakpointTablet } from "../Utils/breakpoints";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav>
      <ul className="nav-bar__nav_list">
        <li className="nav-bar__left_container">
          <p className="nav-bar__title headline3">Avion</p>
          {width >= breakpointTablet && (
            <div className="nav-bar__main_links">
              <MainLink name="Plant Pots" />
              <MainLink name="Ceramics" />
              <MainLink name="Tables" />
              <MainLink name="Chairs" />
              <MainLink name="Crockery" />
              <MainLink name="Tableware" />
              <MainLink name="Cutlery" />
            </div>
          )}
        </li>
        <li className="nav-bar__side_actions">
          <SideAction image={Search} desc="search" />
          <SideAction image={ShoppingCart} desc="shoppingCart" />
          <SideAction image={UserAvatar} desc="userAvatar" />
          {width < breakpointTablet && (
            <SideAction image={Menu} desc="menu" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
