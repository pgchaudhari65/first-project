import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';
// import config from "./config/default";

// // export interface UserDocument extends mongoose.Document{
// //     email: string,
// //     name: string,
// //     password: string,
// //     createAt: Date,
// //     updatedAt: Date
// // }

// const userSchema = new mongoose.Schema(
//     {
//     email: { type: String, required: true},
//     name: { type: String, required: true },
//     password: { type: String, required: true },
//     }
// )

// const UserModel = mongoose.model("User", userSchema);

// export default UserModel;


export interface UserInput {
    email: string;
    name: string;
    password: string;
  }
  export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    //(candidatePassword: string): Promise<Boolean>;
  }
//create specific schema using Schema constructor
//how the database look
const userSchema=new mongoose.Schema({
email:{type:String},
name: {type:String},
password : {type:String}
},
{
timestamps: true
});
const UserModel=mongoose.model<UserDocument>("UserSchema",userSchema);
export default UserModel










