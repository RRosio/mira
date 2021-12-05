import { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSearch from '../components/HomeSearch';
// import HomeFavorites from '../components/HomeFavorites';
import Chart from '../components/Chart';

import '../styles/Home.css';

const Home : FC = () => {

    return (
        <>
           <div className="homemain"> 
                <Navbar/>
                <HomeSearch/>
                <Chart/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;