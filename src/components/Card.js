import "./Card.css";
import Button from "./Button";




const Card = (props) => {

  const {id, title, tags, perex} = props

   return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="tags">{tags}</p>
      <p className="perex">{perex}</p>
      <Button></Button>
    </div>
  );
};

export default Card;
