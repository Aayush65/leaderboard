import mongoose from "mongoose";

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    name: String,
    clicks: Number,
    difficulty: String,
});

leaderboardSchema.index({ clicks: 1 });
const LeaderboardModel = mongoose.model("leaderboard", leaderboardSchema);

export default LeaderboardModel