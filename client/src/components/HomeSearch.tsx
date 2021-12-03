import { useState, useEffect, FC } from 'react';
import { Grid } from '@material-ui/core';

const HomeSearch : FC = () => {
    const [testState, setTestState] = useState("");

    useEffect(() => {
        fetch('/hi')
        .then(response => response.json())
        .then(data => {
            setTestState(data.server);
            console.log('data: ', data);
        });
    }, []);

    return (
        <main>
            <Grid container>
                <Grid container item xs={12} md={4}>
                    <Grid item>
                        {testState}
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