"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const score_1 = __importDefault(require("../models/score"));
function postLeaderboardController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, clicks, difficulty } = req.body;
        if (!name)
            res.status(400).json({ message: "Missing name" });
        else if (!clicks)
            res.status(400).json({ message: "Missing clicks" });
        else if (!difficulty)
            res.status(400).json({ message: "Missing difficulty" });
        else {
            const newScore = new score_1.default({ name, clicks, difficulty });
            const addScore = yield newScore.save();
            res.json(addScore);
        }
    });
}
exports.default = postLeaderboardController;
