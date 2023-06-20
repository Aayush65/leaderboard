import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import postLeaderboardController from './controllers/postLeaderboardController';
import getLeaderboardController from './controllers/getLeaderboardController';

config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://flipgame.aayush65.com"
}));


app.post('/entry', postLeaderboardController);
app.get('/entry/:difficulty', getLeaderboardController)

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Connected to MongoDB and Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT);
}).catch((err) => {
    console.log("Can't connect to the db");
    console.log(err);
})