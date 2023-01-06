import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (<>
        <Navbar/>
        <Jumbotron/>

		<div className="container text-center">
  <div className="row">
    <div className="col-lg-3 px-1 pt-2 pb-2">
	<Card/>
    </div>
    <div className="col-lg-3 px-1 pt-2 pb-2">
	<Card/>
    </div>
    <div className="col-lg-3 px-1 pt-2 pb-2">
	<Card/>
    </div>
	<div className="col-lg-3 px-1 pt-2 pb-2">
	<Card/>
    </div>
  </div>
</div>

        <Footer/>
		</>
    )
};

export default Home;
