import {Request, Response} from 'express';
import LeaderboardModel from '../models/score';

async function getLeaderboardController(req: Request, res: Response) {
    const difficulty = req.params.difficulty;
    const scores = await LeaderboardModel.find({ difficulty: difficulty }).sort({ clicks: 1 }).limit(5).select('name clicks').lean();
    res.json(scores);
}

export default getLeaderboardController;