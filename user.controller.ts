import { Request, Response } from "express";
import UserModel from "./user.model";

export function createUserHandler(req: Request, res: Response){
    try{

        const user =  UserModel.create(req.body);
        res.send(user);

    } catch (e: any) {
        return res.status(409).send(e.message);
    }
}