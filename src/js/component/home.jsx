import React from "react";
import Navbar from "./navbar.jsx";
//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar /> 
			<Jumbotron />
			<div className="d-flex">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
