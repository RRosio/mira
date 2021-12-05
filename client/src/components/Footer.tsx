import { Grid } from '@mui/material';
import { FC } from 'react';
import '../styles/Footer.css';

const Footer : FC = () => {

    return (
        <footer>
            <Grid className="FooterContainer" container>
                <Grid className="FooterItem" item xs={6}>
                    Link 1
                </Grid>
                <Grid className="FooterItem" item xs={6}>
                    Link 2
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;