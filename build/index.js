"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const postLeaderboardController_1 = __importDefault(require("./controllers/postLeaderboardController"));
const getLeaderboardController_1 = __importDefault(require("./controllers/getLeaderboardController"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/entry', postLeaderboardController_1.default);
app.get('/entry/:difficulty', getLeaderboardController_1.default);
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log(`Connected to MongoDB and Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT);
}).catch((err) => {
    console.log("Can't connect to the db");
    console.log(err);
});
