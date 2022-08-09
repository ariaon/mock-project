import { headline3 } from "../Styles/Text";
import { MainLink } from "./MainLink";
import { SideAction } from "./SideAction";
import Search from "../Images/Search.png";
import ShoppingCart from "../Images/ShoppingCart.png";
import UserAvatar from "../Images/UserAvatar.png";

const NavBar = () => {
  return (
    <div>
      <div style={styles.container}>
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
        <div style={styles.sideActions}>
          <SideAction image={Search} desc="search" />
          <SideAction image={ShoppingCart} desc="shoppingCart" />
          <SideAction image={UserAvatar} desc="userAvatar" />
        </div>
      </div>
    </div>
  );
};

export { NavBar };

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    width: "100%",
    paddingTop: 22,
    paddingBottom: 22,
    alignItems: "center",
  },
  title: {
    ...headline3,
    fontFamily: "Clash Display, sans-serif",
    color: "#22202E",
    marginBottom: 0,
    paddingLeft: 80,
  },
  mainLinks: {
    display: "flex",
    gap: 44,
  },
  sideActions: {
    display: "flex",
    justifyContent: "right",
    paddingRight: 100,
    gap: 10,
  },
};
