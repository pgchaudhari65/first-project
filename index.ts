import express from 'express';
import config from './config/default';
import  Item  from './item.router';
import connect from './connect';
import logger from './logger';
import parser from "body-parser";

const app = express();
app.use(parser.json()); //application/json
const router = express.Router()


// router.get('/me', (req,res) => {
//     res.send({ me: 'hello'})
// })

// app.use('/api', router)
 app.use('/',Item);
 logger.info("In index.ts");
 
// app.post('/data', (req,res) => {
//     console.log(req.body)
//     res.send({ ok : true})
// })

app.listen(3000, async () => {
    
    logger.info('The application is running on port 3000!');

    await connect();

    //Item(app);
});