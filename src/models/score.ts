import mongoose from "mongoose";

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    name: String,
    clicks: Number
});

const LeaderboardModel = mongoose.model("leaderboard", leaderboardSchema);

export default LeaderboardModel