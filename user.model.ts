import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';
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
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    },
    {
        timestamps: true,
    }

)

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
