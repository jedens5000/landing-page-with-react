import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
