import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import '../styles/Login.css';
const LoginMain = () => {

    return (
        <React.Fragment>
           <div className="loginmain"> 
                <Navbar/>
                <Login/>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default LoginMain;