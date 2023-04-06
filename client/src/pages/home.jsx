import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import "./home.css";

const Home = () => {
    return (

        <div>
            <Navbar />
            {/* <h1>Home Page</h1> */}

            <div>
                <img src="https://github.com/codingwithmuhib/React-Car-Rental-Website/blob/master/src/assets/all-images/slider-img/slider-2.jpg?raw=true" class="img-fluid rounded mx-auto d-block" alt="" />
            </div>
        </div>

    );
}

export default Home;
