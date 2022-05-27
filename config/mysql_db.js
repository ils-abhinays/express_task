import mysql from 'mysql';
import bodyParser from 'body-parser';
 

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhinay.777',
    database: 'backend_work',
    insecureAuth : true
   });
   conn.connect(function(error){
       if(error){
           console.log(error)
       }
       else console.log("connect successfully...")
   })

   export default conn