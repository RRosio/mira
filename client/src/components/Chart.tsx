import { Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Chart.css';
// import { useEffect, useState } from 'react';

const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    }
    // const getInfo = async () => {
    //     const data = await fetch('/coinbase/prices')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('data in fetch: ', data);
            
    //     });
    //     console.log('data at last: ', data);
    // };
    // const regenerateData = () => {
    //     Takes in array of objects: {id: string, min_size: string, name: string}
    // };
    
    // const [currenciesName, setCurrenciesName] = useState([""]);
    // const [currenciesId, setCurrenciesId] = useState([""]);

    // const getListOfCurrencies = () => {
    //     fetch('/coinbase/currencies')
    //     .then(response => response.json())
    //     .then(data => {
    //         // setCurrenciesData(data);
    //         // console.log('data: ', data);
    //         let currencyNames = [];
    //         let currencyIds = [];
    //         const currencies = data[Object.keys(data)[0]];
    //         console.log('currencies: ', currencies);
            
    //         for(let i = 0; i < currencies.length; i++){
    //             currencyNames.push(currencies[i].name);
    //             currencyIds.push(currencies[i].id);
    //         }

    //         setCurrenciesName(currencyNames);
    //         setCurrenciesId(currencyIds);
    //     }).catch(err => {
    //         console.log('error: ', err);
    //     });
    // }
    
    // useEffect(() => {
    //     getListOfCurrencies();
    // }, []);


    return (
         <>
            <Grid className="chart" container>
                <Grid item xs={12} md={8}>
                    <Grid item>
                       <Line data={data}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item>
                        Title
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Chart;