"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//create specific schema using Schema constructor
//how the database look
const userSchema = new mongoose_1.default.Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String }
}, {
    timestamps: true
});
const UserModel = mongoose_1.default.model("UserSchema", userSchema);
exports.default = UserModel;
