import React from "react";
import Navbar from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar /> 
			<Jumbotron />
			{/* <Cards />
			<Cards />
			<Cards />
			<Cards /> */}
			<Footer />
		</div>
	);
};

export default Home;
