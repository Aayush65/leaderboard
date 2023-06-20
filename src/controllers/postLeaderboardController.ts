import {Request, Response} from 'express';
import LeaderboardModel from '../models/score';

async function postLeaderboardController(req: Request, res: Response) {
    const { name, clicks, difficulty } = req.body;
    if (!name)
        res.status(400).json({ message: "Missing name" });
    else if (!clicks)
        res.status(400).json({ message: "Missing clicks" });
    else if (!difficulty)
        res.status(400).json({ message: "Missing difficulty" });
    else {
        const newScore = new LeaderboardModel({ name, clicks, difficulty });
        const addScore = await newScore.save();
        res.json(addScore);
    }
}

export default postLeaderboardController;