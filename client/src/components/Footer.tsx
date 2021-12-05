import { Grid } from '@mui/material';
import { FC } from 'react';
import '../styles/Footer.css';

const Footer : FC = () => {

    return (
        <footer>
            <Grid className="FooterContainer" container>
                <Grid className="FooterItem" item xs={12}>
                    <a title="Link to Github"  aria-labelledby="FooterContainer FooterItem" href="https://github.com/RRosio">Visit My Github</a>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;