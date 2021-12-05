import { Grid, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import { useState, useEffect } from 'react';
import { FC } from 'react';
import '../styles/CoinSearchBar.css';

const CoinSearchBar : FC<{currencies:string[]}> = ({currencies}) => {
    const [value, setValueState] = useState("");
    const [items, setItemsState] = useState([<MenuItem></MenuItem>]);
    console.log('currencies from coin search bar: ', currencies);
    useEffect(() => {
        const results = currencies.filter(currency => {
            return currency.toUpperCase().includes(value);
        });
        console.log('search results: ', results);
        const items = generateMenuItems(results);
        console.log('items ', items);
        setItemsState(items);
    }, [value, currencies]);

    const generateMenuItems = (results: string[]) => {
        const conditional : Array<JSX.Element> = [];

        for(let i = 0; i < results.length; i++){
            conditional.push(
                <MenuItem key={i} value={results[i]}>
                    {results[i]}
                </MenuItem>
            );
        }
        return conditional;
    };
        
    return (
        <>
            <Grid className="SearchContainer" container>
                <Grid item>
                    <SearchBar
                    value={value}
                    onChange={(newValue) => setValueState(newValue)}/>
                </Grid>
            </Grid>
            <FormControl>
                <InputLabel>Coin Id</InputLabel>
                <Select>
                    {items}
                </Select>
            </FormControl>
        </>
    );
}

export default CoinSearchBar;