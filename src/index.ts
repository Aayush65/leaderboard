import express, {Request, Response} from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import LeaderboardModel from './models/score';

config();
const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello World");
})

app.post('/entry', async (req: Request, res: Response) => {
    const { name, clicks } = req.body;
    const newScore = new LeaderboardModel({ name, clicks });
    const addScore = await newScore.save();
    res.json(addScore);
})

mongoose.connect(process.env.URL!)
        .then(() => {
            console.log(`Connected to MongoDB and Listening on Port ${process.env.PORT || 5000}`);
            app.listen(process.env.PORT || 5000);
        })
        .catch((err) => {
            console.log("Can't connect to the db");
            console.log(err);
        })
