import React from "react";
import "./card.css";

const Card = ({image, heading, subtext}) => {
    return(
        <div className="card">
            <img src={image} alt=""></img>
            <span>{heading}</span>
            <span>{subtext}</span>
        </div>
    )
};

export default Card;