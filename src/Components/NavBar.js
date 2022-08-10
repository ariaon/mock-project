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
    paddingLeft: 0
  },
  left: {
    display: "flex",
    marginRight: "auto",
    marginLeft: '5%',
  },
  title: {
    ...headline3,
    marginBottom: 0,
    fontFamily: "Clash Display, sans-serif",
    color: "#22202E",
  },
  mainLinks: {
    display: "flex",
    gap: "3vw",
    marginLeft: "12vw",
    alignItems: "center",
    whiteSpace: "nowrap"
  },
  sideActions: {
    display: "flex",
    paddingRight: "5%",
    gap: 10,
    listStyle: "none",
  },
};
