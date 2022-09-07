import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
        <div className="jumbotron">
  <h1 className="display-4">A Warm Welcome!</h1>
  <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora beatae alias laborum animi quasi quidem nulla. Numquam, earum facere exercitationem odio eaque suscipit ad molestiae tempore error quia. Provident, debitis.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
  </p>
</div>
    );
};

export default Jumbotron;
