import React from "react";
import { Link } from "react-router-dom";
import BackImage from "../imgs/food.avif";
import "../styles/Home.css";



function Home () {
    return (
      <div className="home"  style={{ backgroundImage: `url(${BackImage})`}}> 
         <div className="headerContainer">
          <h1>Corleone's</h1>
           <p> Igazi olasz ételek Budapest szívében </p>
            <Link to="/menu">
           <button> Étlap </button>
            </Link>
        </div>
    </div>
    );

}

export default Home;