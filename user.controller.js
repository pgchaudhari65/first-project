"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const user_model_1 = __importDefault(require("./user.model"));
function createUserHandler(req, res) {
    try {
        const user = user_model_1.default.create(req.body);
        res.send(user);
    }
    catch (e) {
        return res.status(409).send(e.message);
    }
}
exports.createUserHandler = createUserHandler;
