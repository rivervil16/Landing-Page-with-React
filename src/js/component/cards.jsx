import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Cards = (props) => {
	return (
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.buttonUrl} className="btn btn-primary">
        {props.buttonLabel}
    </a>
  </div>
</div>
    );
};
Cards.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string,
};

export default Cards;
