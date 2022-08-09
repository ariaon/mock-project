const SideAction = (props) => {
  return (
    <img  src={props.image} style={styles.image} alt={props.desc}/>
  );
};

export { SideAction };

const styles = {
  image: {
    width:16,
    height:16
  }
};
