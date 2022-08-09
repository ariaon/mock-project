import { headline3 } from "../Styles/Text";
import { MainLink } from "./MainLink";
import { SideAction } from "./SideAction";
import Search from "../Images/Search.png";
import ShoppingCart from "../Images/ShoppingCart.png";
import UserAvatar from "../Images/UserAvatar.png";

const NavBar = () => {
  return (
    <nav>
      <ul style={styles.navList}>
        <li style={styles.left}>
          <p style={styles.title}>Avion</p>
          <div style={styles.mainLinks}>
            <MainLink name="Plant Pots" />
            <MainLink name="Ceramics" />
            <MainLink name="Tables" />
            <MainLink name="Chairs" />
            <MainLink name="Crockery" />
            <MainLink name="Tableware" />
            <MainLink name="Cutlery" />
          </div>
        </li>
        <li style={styles.sideActions}>
          <SideAction image={Search} desc="search" />
          <SideAction image={ShoppingCart} desc="shoppingCart" />
          <SideAction image={UserAvatar} desc="userAvatar" />
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };

const styles = {
  navList: {
    height: 80,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  left: {
    display: "flex",
    marginRight: "auto",
    paddingLeft: 70,
  },
  title: {
    ...headline3,
    marginBottom: 0,
    fontFamily: "Clash Display, sans-serif",
    color: "#22202E",
  },
  mainLinks: {
    display: "flex",
    gap: 44,
    marginRight: "auto",
    paddingLeft: 150,
    listStyle: "none",
    alignItems: "center",
  },
  sideActions: {
    display: "flex",
    paddingRight: 100,
    gap: 10,
    listStyle: "none",
  },
};
