import React from 'react';
import '../styles/Home.css';
import image from '../assets/homepage.jpeg';

const Home = () => {
    return(
        <div className="home-page">
            <h1>Home</h1>
            <img className="home-image" src={image} alt=""/>
            <p>Feel free to use our brilliant <a href="/recipe-search">recipe book</a> to find new and exciting
                recipes for you and your family
            </p>
        </div>
    )
}

export default Home;