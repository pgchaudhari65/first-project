"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_router_1 = __importDefault(require("./item.router"));
const connect_1 = __importDefault(require("./connect"));
const logger_1 = __importDefault(require("./logger"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
// router.get('/me', (req,res) => {
//     res.send({ me: 'hello'})
// })
// app.use('/api', router)
app.use('/', item_router_1.default);
// app.get('/data', (req, res) => {
//     res.send({ data: [1,2,3] })
// })
// app.post('/data', (req,res) => {
//     console.log(req.body)
//     res.send({ ok : true})
// })
app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('The application is listening on port 3000!');
    logger_1.default.info('The application is running on port 3000');
    yield (0, connect_1.default)();
    //Item(app);
}));
