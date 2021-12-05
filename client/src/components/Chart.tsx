import { Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { FC } from 'react';
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

const Chart : FC<{prices: string[], times: string[]}> = ({prices, times}) => {
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
        labels: times,
        datasets: [
            {
                label: "BTC Prices",
                data: prices,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    }

    return (
         <>
            <Grid className="chart" container>
                <Grid item xs={12}>
                    <Grid item>
                    <Line data={data}/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Chart;