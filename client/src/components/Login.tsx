import { Grid, Button } from '@material-ui/core';
import CoinbaseIcon from './CoinbaseIcon';
import { FC } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const LoginMain : FC = () => {

    // const [testState, setTestState] = useState("");
    // useEffect(() => {
    //     fetch('/hi', { method: 'GET', redirect: 'follow' })
    //     .then(response => response.json())
    //     .then(data => {
    //         setTestState(data.body);
    //         console.log('data: ', data);
    //     }).catch(err => {
    //         console.log('error: ', err);
    //     });
    // }, []);

    // const navigate = useNavigate();

    // const redirect = () => {
    //     fetch('/coinbase/signin', { method: 'GET', redirect: 'follow'})
    //     .then(response => {
    //         console.log(response);
    //         response.json();
    //     })
    //     .then(data => console.log('data: ', data))
    //     .catch(err => {
    //         console.log('error: ', err);
    //     });
    //     return;
    // }

    const redirect = () => {
        window.location.href = process.env.REACT_APP_AUTHORIZE_URL;
        return null;
    }

    return (
        <main>
            <Grid container>
                <Grid item xs={12}>
                    <h2>Log in to your Coinbase Account</h2>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={redirect}>
                        <CoinbaseIcon/>
                    </Button>
                </Grid>
            </Grid>
        </main>
    );
}

export default LoginMain;