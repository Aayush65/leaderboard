import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import LeaderboardModel from './models/score';


const app = express();
app.use(express.json());

// console.log(process.env.URL)


app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello World");
})

app.post('/entry', async (req: Request, res: Response) => {
    const { name, clicks } = req.body;
    const newScore = new LeaderboardModel({ name, clicks });
    const addScore = await newScore.save();
    res.json(addScore);
})

mongoose.connect("mongodb+srv://mantis65:UMKzZm2cux2q9Eaf@leaderboardcluster.2halqrp.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("Connected to MongoDB and Listening on Port 5000");
            app.listen(5000);
        })
        .catch((err) => {
            console.log("Can't connect to the db");
            console.log(err);
        })
