import '../CSS/MainLink.css'

const MainLink = (props) => {
  return (
    <p className="headline5 main-link__text">{props.name}</p>
  );
};

export { MainLink };