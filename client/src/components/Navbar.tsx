import { Grid, Button } from '@mui/material';
import { FC } from 'react';
import logo from '../icons/logo.svg';
import '../styles/Navbar.css';
// import { Link } from 'react-router-dom';
// import CoinSearchBar from './CoinSearchBar';
import { useState, useEffect } from 'react';

const Navbar: FC = () => {
    const [currenciesNames, setCurrenciesNames] = useState([""]);
    const [currenciesIds, setCurrenciesIds] = useState([""]);
    const getListOfCurrencies = () => {
        fetch('/coinbase/currencies')
        .then(response => response.json())
        .then(data => {
            let currencyNames = [];
            let currencyIds = [];
            const currencies = data[Object.keys(data)[0]];
            console.log('currencies: ', currencies);
            
            for(let i = 0; i < currencies.length; i++){
                currencyNames.push(currencies[i].name);
                currencyIds.push(currencies[i].id);
            }
            setCurrenciesNames(currencyNames);
            setCurrenciesIds(currencyIds);
        }).catch(err => {
            console.log('error: ', err);
        });
    }
    
    useEffect(() => {
        getListOfCurrencies();
    }, []);

    return (
        <nav>
            <Grid container>
                <Grid item xs={2}>
                    <a title="Link to Home Page"  aria-labelledby="container item"  href='/'>
                        <img src={logo} alt='Mirad logo to navigate to home page'></img>
                    </a> 
                </Grid>
                {/* <Grid className="findButton" item xs={6}>
                    <CoinSearchBar currencies={currenciesIds}/>
                </Grid> */}
                {/* <Grid className="favoritesButton" item xs={2}>
                    <Button>View Favorites</Button>
                </Grid> */}
                {/* <Grid item xs={2}>
                    <Button><Link to={"/coinbase"}>Login</Link></Button>
                </Grid> */}
            </Grid>
        </nav>
    );
}

export default Navbar;