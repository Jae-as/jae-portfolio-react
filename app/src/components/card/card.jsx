import React from "react";
import "./card.css";

const Card = ({image, heading, subtext}) => {
    return(
        <div className="card">
            <img src={image} alt=""/>
            <div className="card-supportingtext">
            <span>{heading}</span><br/>
            <span>{subtext}</span>
            </div>
        </div>
    )
};

export default Card;