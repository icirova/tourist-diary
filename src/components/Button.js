import "./Button.css"

import { useState } from "react"




const Button = () => {
    const [buttonText, setButtonText] = useState("Více");
    const [isCardsHidden, setIsCardsHidden] = useState(false);

  
    const buttonHandler = () => {
      if (isCardsHidden) {
        setButtonText("Více");
      } else {
        setButtonText("Zpět");
      }
  
      setIsCardsHidden(!isCardsHidden);



    };



    return(
    	<button onClick={buttonHandler} className="btn">{buttonText}</button>
    )
}

export default Button