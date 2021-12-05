// import { useState, useEffect, FC } from 'react';
import { FC } from 'react';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import CoinSearchBar from './CoinSearchBar';
import '../styles/HomeSearch.css';

const HomeSearch : FC = () => {

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
        <main>
            <Grid className="HomeContainer">
                <Grid className="findButton" item xs={12}>
                    <CoinSearchBar currencies={currenciesIds}/>
                </Grid>
            </Grid>
        </main>
    );
}

export default HomeSearch;