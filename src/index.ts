import express, {Request, Response} from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import LeaderboardModel from './models/score';

config();
const app = express();
app.use(express.json());
app.use(cors());



app.post('/entry', async (req: Request, res: Response) => {
    const { name, clicks } = req.body;
    if (!name){
        res.status(400).json({ message: "Missing name" });
    } else if (!clicks) {
        res.status(400).json({ message: "Missing clicks" });
    } else {
        const newScore = new LeaderboardModel({ name, clicks });
        const addScore = await newScore.save();
        res.json(addScore);
    }
})


app.get('/entry', async (req: Request, res: Response) => {
    const scores = await LeaderboardModel.find().sort({ clicks: 1}).limit(5);
    res.json(scores);
})

mongoose.connect(process.env.MONGO_URL!)
        .then(() => {
            console.log(`Connected to MongoDB and Listening on Port ${process.env.PORT}`);
            app.listen(process.env.PORT);
        })
        .catch((err) => {
            console.log("Can't connect to the db");
            console.log(err);
        })