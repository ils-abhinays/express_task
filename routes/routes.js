import express from 'express'
import path, {resolve} from 'path'
// import ejs from ejs

const router = express.Router()
const __dirname=resolve();
// router.use(logger)

router.get("/",(req,res)=>{
  res.send("this is a home page");
})
router.get("/signup", mware, (req,res)=>{
    // res.send()
    res.render('index.ejs');
  console.log("signup")

})

router.get("/login",(req,res)=>{
  // res.send()
  res.render('login.ejs', {name:'abhi'});
})

router.get("/other",(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/index.html'));
})

router.all('*', (req, res)=>{
res.status(404).send('<h1>404 page not found!</h1>')
});

function mware(req, res, next){
  console.log("middleware occure...")
  next();
}
export default router