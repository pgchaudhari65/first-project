"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { Express, Request, Response } from 'express'
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
//  router.get('/', (req,res) => {
//     res.send({ message: 'hello Router!!!'})
//  })
console.log("In router");
router.post("/", user_controller_1.createUserHandler);
//function router(app: Express) {
//app.get('/',(req,res) => res.send({ message: 'Welcome to Router'}))
//app.post("/api/users", createUserHandler)
//}
exports.default = router;
