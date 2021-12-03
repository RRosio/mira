import { FC } from 'react';
import { Grid } from '@material-ui/core';

const HomeFavorites : FC = () => {

    return (
        <main>
            <Grid container>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    List of Favorited Coins
                </Grid>
            </Grid>
        </main>
    );
}

export default HomeFavorites;