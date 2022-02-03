import { Router } from 'express'
//import { Express, Request, Response } from 'express'
import { createUserHandler } from "./user.controller"


const router = Router();

//  router.get('/', (req,res) => {
//     res.send({ message: 'hello Router!!!'})
//  })

console.log("In router");
router.post("/",createUserHandler)

//function router(app: Express) {
  
  //app.get('/',(req,res) => res.send({ message: 'Welcome to Router'}))

  //app.post("/api/users", createUserHandler)
//}

 export default router
