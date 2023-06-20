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
function getLeaderboardController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const difficulty = req.params.difficulty;
        const scores = yield score_1.default.find({ difficulty: difficulty }).sort({ clicks: 1 }).limit(5).select('name clicks').lean();
        res.json(scores);
    });
}
exports.default = getLeaderboardController;
