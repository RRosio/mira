import { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSearch from '../components/HomeSearch';
import '../styles/Home.css';

const Home : FC = () => {

    return (
        <>
        <div className="homemain"> 
                <Navbar/>
                <HomeSearch/>
        </div>
        <Footer/>
        </>
    );
}

export default Home;