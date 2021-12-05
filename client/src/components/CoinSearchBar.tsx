import { Grid, TextField, Autocomplete } from '@mui/material';
import { useState, useEffect } from 'react';
import { FC } from 'react';
import '../styles/CoinSearchBar.css';

const CoinSearchBar : FC<{currencies:string[]}> = ({currencies}) => {
    const [choice, setChoiceState] = useState("");
    const [input, setInputState] = useState("");
    const [pricesArray, setPricesArrayState] = useState([""]);
    const [timesArray, setTimesArrayState] = useState([""]);

    const getCurrencyHistoricalData = () => {
        fetch('/coinbase/prices/history', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ "input": input })})
        .then(response => response.json())
        .then(data => {
            // setCurrenciesData(data);
            // console.log('data: ', data);
            
            const historicData = data[Object.keys(data)[0]].data;
            // console.log('historicData: ', historicData);
            
            // base: string, currency: string, prices: array of objects with price and time (time needs to be reformatted)
            const { base, currency, prices } = historicData;
            // console.log('prices: ', prices[2]);
            const pricesTempArr = [];
            const timesTempArr = [];

            for(let i = 0; i < prices.length; i++){
                const price = prices[i].price;
                let time = prices[i].time;
                const parsedTime = time.split('T')[0];
                console.log('parsedTime: ', parsedTime);
                pricesTempArr.push(price);
                timesTempArr.push(parsedTime);
            }

            setPricesArrayState(pricesTempArr);
            setTimesArrayState(timesTempArr);
        
        }).catch(err => {
            console.log('error: ', err);
        });
    }

    useEffect(() => {
       if(input !== '' && input && input.length >= 2 && input !== choice){
           getCurrencyHistoricalData();
           setChoiceState(input);
       } 
    }, [choice, input]);
    console.log('prices: ', pricesArray);
    return (
        <>
            <Grid className="SearchContainer" container>
                <Grid item>
                   <Autocomplete
                    disablePortal
                    id="coin-options"
                    options={currencies}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Currency" />}
                    inputValue={input}
                    onInputChange={(e, newVal) => {
                        setInputState(newVal);
                    }}
                    onChange={(e, val) => {
                        console.log('val: ', val);
                    }}
                   />
                </Grid>
            </Grid>
        </>
    );
}

export default CoinSearchBar;