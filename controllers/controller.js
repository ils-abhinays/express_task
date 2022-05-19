import j_data from '../data/jsondata.js'
import authschema from '../validation/valid_schema.js'


let postrq = (req,res)=>{
    res.send("this is the post request")
    console.log(req.body);
  
    const user = {
      id: j_data.length+1,
      password: req.body.pass,
      name: req.body.name,
      email: req.body.email
    }
  
    const result = authschema.validateAsync(req.body)
    console.log(result)
    // if(result){
        // res.send("done")
        // res.send(result)
    // }
}
let putrq= (req,res) => {
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
}

let delrq = (req,res) => {
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
  }

export {putrq, delrq, postrq}