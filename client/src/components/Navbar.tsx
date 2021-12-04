import { Grid, Button } from '@material-ui/core';
import { FC } from 'react';
import logo from '../icons/logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    
    return (
        <nav>
            <Grid container>
                <Grid item xs={2}>
                    <a href='/'>
                        <img src={logo} alt='Mirad logo to navigate to home page'></img>
                    </a> 
                </Grid>
                <Grid className="findButton" item xs={4}>
                    <Button>Find Coins</Button>
                </Grid>
                <Grid className="favoritesButton" item xs={4}>
                    <Button>View Favorites</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button><Link to={"/coinbase"}>Login</Link></Button>
                </Grid>
            </Grid>
        </nav>
    );
}

export default Navbar;