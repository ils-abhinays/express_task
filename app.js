import express from 'express'
import route from './routes/routes.js';

const application = express()
const port = '8001';

// const staticpath = path.join(__dirname,"../static");

application.use('/',route);

application.listen(port,'localhost',()=>{
    console.log("running... at port localhost:8001");
})