import { Grid } from '@material-ui/core';
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
} from 'chart.js'

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
    
    return (
         <div>
            <Grid container>
                <Grid container item xs={12} md={4}>
                    <Grid item>
                       <Line data={data}/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Grid item>
                        Title 2
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chart;