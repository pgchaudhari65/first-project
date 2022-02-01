import express from 'express';
import config from './config/default';
import  Item  from './item.router';
import connect from './connect';
import logger from './logger';

const app = express();

const router = express.Router()


// router.get('/me', (req,res) => {
//     res.send({ me: 'hello'})
// })

// app.use('/api', router)
 app.use('/',Item);

// app.get('/data', (req, res) => {
//     res.send({ data: [1,2,3] })
// })

// app.post('/data', (req,res) => {
//     console.log(req.body)
//     res.send({ ok : true})
// })

app.listen(3000, async () => {
    //console.log('The application is listening on port 3000!');
    logger.info('The application is running on port 3000');

    await connect();

    //Item(app);
});