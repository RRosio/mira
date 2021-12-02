import { Grid, Button } from '@material-ui/core';
import logo from '../icons/logo.svg';
import '../styles/Navbar.css';

const Navbar = () => {

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
                    Login
                </Grid>
            </Grid>
        </nav>
    );
}

export default Navbar;