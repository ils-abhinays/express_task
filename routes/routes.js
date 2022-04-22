import express from 'express'
import path, {resolve} from 'path'
const router = express.Router()
const __dirname=resolve();

router.get("/",(req,res)=>{
    res.send("hi this is index page")
    // res.sendFile(path.join(__dirname,'../public/index.html'));
// application.use(express.static(staticpath));
})

router.get("/other",(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/index.html'));
})

export default router