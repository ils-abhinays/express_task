import express from 'express'
import path, {resolve} from 'path'
import j_data from '../data/jsondata.js'

// import ejs from ejs

const router = express.Router()
const __dirname=resolve();
// router.use(logger)
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

router.post("/postrq",(req,res)=>{
  // res.render('login.ejs', {name:'abhi'});
  res.send("this is the post request")
  console.log(req.body);

  const user = {
    id: j_data.length+1,
    password: req.body.pass,
    name: req.body.name,
    email: req.body.email
  }

    j_data.push(user);
    res.json(user);
})

router.put("/putrq/:id",(req,res)=>{
  res.send("this is the put request")
  
  let id = req.params.id
  let password = req.body.password
  let name = req.body.name
  let email = req.body.email
  
  let index = j_data.findIndex((student)=>{
      return (student.id==Number.parseInt(id))
  })

  if(index > 0){
    let std = j_data[index]
    std.password = password
    std.name= name
    std.email = email

    j_data.push(user);
    res.json(user);
}
})

router.delete("/delrq/:id",(req,res)=>{
  res.send("this is the delete request")
  
  let id = req.params.id
  let password = req.body.password
  let name = req.body.name
  let email = req.body.email
  
  let index = j_data.findIndex((student)=>{
      return (student.id==Number.parseInt(id))
  })

  if(index > 0){
    let std = j_data[index]
    j_data.splice(index, 1)

    res.json(std);
}
})
// -----------------------------------------------
router.all('*', (req, res)=>{
res.status(404).send('<h1>404 page not found!</h1>')
});

function mware(req, res, next){
  console.log("middleware occure...")
  next();
}
export default router