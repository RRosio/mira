// import { useState, useEffect, FC } from 'react';
import { FC } from 'react';
import { Grid, Button, Paper, List } from '@mui/material';
import { useState, useEffect } from 'react';
import '../styles/HomeSearch.css';

const HomeSearch : FC = () => {
    // const [testState, setTestState] = useState("");
    // useEffect(() => {
    //     fetch('/hi')
    //     .then(response => response.json())
    //     .then(data => {
    //         setTestState(data.server);
    //         console.log('data: ', data);
    //     });
    // }, []);

    // const [prices, setPricesState] = useState([]);
    // useEffect(() => {
    //     fetch('/coinbase/prices')
    //     .then(response => {
    //         response.json();
    //     })
    //     .then(data => {
    //         setPricesState(data);
    //         console.log('data: ', data);
    //     });
    // }, []);
    const getInfo = async () => {
        const data = await fetch('/coinbase/prices')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('data in fetch: ', data);
            
        });
    };

    const [currenciesName, setCurrenciesName] = useState([""]);
    const [currenciesId, setCurrenciesId] = useState([""]);

    const getListOfCurrencies = () => {
        fetch('/coinbase/currencies')
        .then(response => response.json())
        .then(data => {
            // setCurrenciesData(data);
            // console.log('data: ', data);
            let currencyNames = [];
            let currencyIds = [];
            const currencies = data[Object.keys(data)[0]];
            console.log('currencies: ', currencies);
            
            for(let i = 0; i < currencies.length; i++){
                currencyNames.push(currencies[i].name);
                currencyIds.push(currencies[i].id);
            }

            setCurrenciesName(currencyNames);
            setCurrenciesId(currencyIds);
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
                <Grid className="HomeItem" item xs={12} md={6}>
                    <Grid item>
                       <Button onClick={getInfo}>Grab price info</Button>
                    </Grid>
                </Grid>
                <Grid className="HomeItem" item xs={12} md={6}>
                    <Grid item>
                        <Button onClick={getInfo}>Grab price info</Button>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
}

export default HomeSearch;