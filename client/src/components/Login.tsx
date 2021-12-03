import { Grid, Button } from '@material-ui/core';
import CoinbaseIcon from './CoinbaseIcon';
import { useState, useEffect, FC } from 'react'; 

const LoginMain : FC = () => {

    const [testState, setTestState] = useState("");

    useEffect(() => {
        fetch('/hi', { method: 'GET', redirect: 'follow' })
        .then(response => response.json())
        .then(data => {
            setTestState(data.body);
            console.log('data: ', data);
        }).catch(err => {
            console.log('error: ', err);
        });
    }, []);

    const authorization = () => {
        fetch('/coinbase', { method: 'GET', redirect: 'follow'})
        .then(data => {
            console.log('data: ', data);
        }).catch(err => {
            console.log('error: ', err);
        });
        return;
    }

    return (
        <main>
            <Grid container>
                <Grid item xs={12}>
                    <h2>Log in to your Coinbase Account {testState}</h2>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={authorization}>
                        <CoinbaseIcon/>
                    </Button>
                </Grid>
            </Grid>
        </main>
    );
}

export default LoginMain;