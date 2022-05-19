import express from 'express'
import route from './routes/routes.js';



// const encoder = bodyParser.urlencoded();

const application = express()
const port = '8000';
// application.set('view-engine', 'ejs')
application.set('view-engine', 'pug')
application.use("/assets",express.static("assets"))



application.use('/',route);

application.listen(port,'localhost',()=>{
    console.log("running... at port localhost:8000");
})