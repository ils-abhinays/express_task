import express from 'express'
import path, {resolve} from 'path'
// import ejs from ejs

const router = express.Router()
const __dirname=resolve();
// router.use(logger)

router.get("/",(req,res)=>{
  res.render('index.ejs');
})
router.get("/signup", mware, (req,res)=>{
  res.render('signup.ejs');
  console.log("signup")
})

router.get("/login",(req,res)=>{
  res.render('login.ejs', {name:'abhi'});
})

router.get("/person",(req,res)=>{
  let pn= req.query.name;
  let pass= req.query.pass;

  res.send("<h1>Hello this is get request and your name is " + pn + " and your password is " + pass + "</h1>");
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