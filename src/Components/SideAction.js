import "../CSS/SideAction.css";
const SideAction = (props) => {
  return (
    <img src={props.image} className="side-action__image" alt={props.desc} />
  );
};

export { SideAction };
