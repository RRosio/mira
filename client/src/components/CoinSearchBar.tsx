import { Grid } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import { useState } from 'react';
import '../styles/CoinSearchBar.css';

const CoinSearchBar = () => {
    const [value, setValueState] = useState("");
    return (
        <>
            <Grid className="SearchContainer" container>
                <Grid item>
                    <SearchBar
                    value={value}
                    onChange={(newValue) => setValueState(newValue)}/>
                </Grid>
            </Grid>
        </>
    );
}

export default CoinSearchBar;