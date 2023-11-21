import "./CardOpen.css";
import Button from "./Button";

const CardOpen = (props) => {
  return (
    <div className="card card--open">

        <h1 className="title">{ props.title }</h1>
        <p className="tags">{props.tags}</p>
        <p className="perex"> {props.perex}</p>
        <p className="description"> {props.description}</p>
        <img className="image" src= {props.photo} alt= {props.alt} />

        <Button></Button>
        
    </div>
  );
};

export default CardOpen;