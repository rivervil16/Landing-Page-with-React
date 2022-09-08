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
			<div className="d-flex container">
			<Cards 
			title="Desayuno Top Ful Rico"
		imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg"
		description="Tiene huevo, panceta, todo diet y le podes poner sal y pimienta que hay ahi atras"
		buttonUrl={""}
		buttonLabel="Comer este" />
			<Cards title="Pan, Palta y Huevo"
		imageUrl="https://thebigmansworld.com/wp-content/uploads/2022/01/healthy-breakfast-recipes.jpeg"
		description="Rico y fresco, con una hojita verde al costado"
		buttonUrl={""}
		buttonLabel="Saborear este otro"/>
			<Cards title="Desayuno de Campeones"
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WFtZyHAqi4Cvtl2G-1kNk11cv4N2Ud1MvQ&usqp=CAU"
		description="Para romper todo y arrancar a full el dia"
		buttonUrl={""}
		buttonLabel="Solo esta comida en el dia"/>
			<Cards title="Todo rico"
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtiQtfqPd_YDQJkxwHzlGkX-KvUp4O1B0_A&usqp=CAU"
		description="Deliciuos breakfast con 2 tostadas carbonizadas"
		buttonUrl={""}
		buttonLabel="Quiero probar las tostadas carbonizadas"/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
