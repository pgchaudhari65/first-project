import { Router } from 'express'
//import { Express, Request, Response } from 'express'
import { createUserHandler } from "./user.controller"


const router = Router();

 router.get('/', (req,res) => {
    res.send({ message: 'hello !!!'})
 })

//function router(app: Express) {
  
  //app.get('/',(req,res) => res.send({ message: 'Welcome to Router'}))

  //app.post("/api/users", createUserHandler)
//}

 export default router
