import express, {Express} from 'express';
import cors from 'cors';
const PORT: string | number = process.env.PORT || 8080;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).json({ server: "is working"});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
