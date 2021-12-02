import { Grid } from '@material-ui/core';

const Footer = () => {

    return (
        <footer>
            <Grid container>
                <Grid item xs={4}>
                    Link 1
                </Grid>
                <Grid item xs={4}>
                    Link 2
                </Grid>
                <Grid item xs={4}>
                    Link 3
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;