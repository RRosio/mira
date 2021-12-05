// import { useState, useEffect, FC } from 'react';
import { FC } from 'react';
import { Grid, Button } from '@material-ui/core';

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
    const getInfo : any = async () => {
        const data = await fetch('/coinbase/prices')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('data in fetch: ', data);
            
        });
        console.log('data at last: ', data);
    };

    return (
        <main>
            <Grid container>
                <Grid container item xs={12} md={4}>
                    <Grid item>
                       <Button onClick={getInfo}>Grab price info</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Grid item>
                        Title
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
}

export default HomeSearch;