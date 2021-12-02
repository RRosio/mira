import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSearch from '../components/HomeSearch';
// import HomeFavorites from '../components/HomeFavorites';
import '../styles/Home.css';

const Home = () => {

    return (
        <React.Fragment>
           <div className="homemain"> 
                <Navbar/>
                <HomeSearch/>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;