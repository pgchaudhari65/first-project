import mongoose from 'mongoose';
import config from "./config/default";

export interface UserDocument extends mongoose.Document{
    email: string,
    name: string,
    password: string,
    createAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema(
    {
    email: { type: String, required: true},
    name: { type: String, required: true },
    password: { type: String, required: true },
    }
)

const UserModel = mongoose.model("User", userSchema);

export default UserModel;


