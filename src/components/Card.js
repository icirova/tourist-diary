import "./Card.css";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="title">{ props.title }</h1>
      <p className="tags">{props.tags}</p>
      <p className="perex"> {props.perex}</p>
      <Button />
    </div>
  );
};

export default Card;
