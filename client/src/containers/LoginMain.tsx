import { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import '../styles/Login.css';
const LoginMain : FC = () => {

    return (
        <>
           <div className="loginmain"> 
                <Navbar/>
                <Login/>
            </div>
            <Footer/>
        </>
    );
}

export default LoginMain;