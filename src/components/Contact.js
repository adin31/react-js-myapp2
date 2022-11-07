import React from "react";
import star from "../images/star.png";

function Contact(props) {
    return (
        <div className="contact-card">
            <img src={require(`../images/${props.img}.png`)} alt="thumbnail"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={star} alt="star" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={star} alt="phone" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact