import { Request, Response } from "express";
import UserModel from "./user.model";

export async function createUserHandler(req: Request, res: Response){
    try{
        console.log(req.body);
         const user =  await UserModel.create(req.body);
         //return user;
         res.send(user);
        console.log("in controller2");

        // const user = UserModel.create(req.body).then((users) => {
        //     return res.send(users);
        //   });

    } catch (e: any) {
        return res.send(e.message);
    }
}