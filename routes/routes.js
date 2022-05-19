import express from 'express'
import path, {resolve} from 'path'
import j_data from '../data/jsondata.js'
import { putrq, delrq, postrq } from '../controllers/controller.js'


const router = express.Router()
const __dirname=resolve();
router.use(express.json())

router.get("/",(req,res)=>{
  res.render('index.ejs');
})
router.get("/signup", mware, (req,res)=>{
  res.render('signup.ejs');
  console.log("signup")
})

router.post("/login",(req,res)=>{
  res.render('login.ejs', {name:'abhi'});
})



router.get("/dashboard",(req,res)=>{
  res.render('dashboard.pug', {partial:'partials data'});
})

router.get("/person",(req,res)=>{
  let pn= req.query.name;
  let pass= req.query.pass;
  res.send("<h1>Hello this is get request and your name is " + pn + " and your password is " + pass + "</h1>");
})

router.get("/other",(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/index.html'));
})

router.get("/jsondata",(req,res)=>{
  res.json(j_data)
})

router.post("/crud",postrq)

router.put("/crud/:id", putrq)

router.delete("/crud/:id",delrq)
// -----------------------------------------------
router.all('*', (req, res)=>{
res.status(404).send('<h1>404 page not found!</h1>')
});

function mware(req, res, next){
  console.log("middleware occure...")
  next();
}
export default router