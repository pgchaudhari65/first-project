"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send({ message: 'hello !!!' });
});
//function router(app: Express) {
//app.get('/',(req,res) => res.send({ message: 'Welcome to Router'}))
//app.post("/api/users", createUserHandler)
//}
exports.default = router;
