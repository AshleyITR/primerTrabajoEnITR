import React from "react";
import './style.css';
import {Link} from "react-router-dom";

const Home = () => {

    return(

    <div>
       
        <h1>Home</h1>
        <nav>
            <Link to={'/ListadoPosts'} >Listado de Posts</Link>
        </nav>

  
    </div>
    );

};

export default Home;

