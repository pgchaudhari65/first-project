import { Request, Response } from "express";
import UserModel from "./user.model";

export async function createUserHandler(req: Request, res: Response){
    try{
        console.log(req.body);
         const user =  await UserModel.create(req.body);
         res.send(user);
        
    } catch (e: any) {
        return res.send(e.message);
    }
}