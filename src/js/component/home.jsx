import React from "react";
import Nav from "./Navbar/nav.jsx"
import Jumbotron from "./Jumbotron/jumbotron.jsx"
import Card from "./Card/card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav></Nav>
			<Jumbotron />
			    <Card 
			     img="https://www.evolutionary.org/wp-content/uploads/2022/02/Brad-pitt-200x300.jpg"
			     descripcion="At the Oscars gala"
			     titulo="The first photo"
				 />
				 <Card
				img="https://tecolotito.elsiglodetorreon.com.mx/g/2022/07/27421181_t.jpeg"
				descripcion="With my skirt"
				titulo="The second photo"
				/>
				<Card
				img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhJyM9yDUW3E9QKvBFjKiXyBAxG0Oq9PXrA&usqp=CAU"
				descripcion="Winning an Oscar"
				titulo="The third photo"
				/>
				<Card
				img="https://www.sheknows.com/wp-content/uploads/2018/08/vmtnwzq07ms4lwqv9jez.jpeg?w=200"
				descripcion="With my ex-partner"
				titulo="The four photo"/>

		</div>
	);
};

export default Home;
