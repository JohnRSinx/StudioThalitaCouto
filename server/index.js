const express = require('express');
const mysql = require('mysql2');
const cors= require('cors');


const app = express();
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Jtr19970',
  database: 'thalitacouto',
})

app.use(cors());
app.use(express.json());


app.get ('/', (req, res) => {
  let sql = "INSERT INTO dadosclient (name,time,category,value) VALUES ('kauanny', '14:32', 'Design', 'R$20');" 
  db.query(sql, (err, result) => {
    console.log(err);
  })
})

app.post("/register", (req, res) => {
  const {name} = req.body;
  const {time} = req.body;
  const {category} = req.body;
  const {value} = req.body;

  let sql = "INSERT INTO dadosclient (name,time,category,value) VALUES (?,?,?,?)";
  db.query(sql, [name,time,category,value],(err,  result) => {
    console.log(err);
  })

})

app.get("/getCards",(req , res)=>{
  let SQL = "SELECT * FROM dadosclient";

  db.query(SQL,(err,result)=>{
    if(err) console.log(err)
    else res.send(result)
  })
})

app.put("/edit",(req , res)=>{
  const {id} = req.body;
  const {name} = req.body;
  const {category} = req.body;
  const {value} = req.body;

  let sql = "UPDATE dadosclient SET name=? , category=? , value=? WHERE iddadosclient=? ;"

  db.query(sql,[name,category,value,id],(err, result)=>{
    if(err) console.log(err)
    else res.send(result)
  })
})

app.delete("/delete/:id", (req , res)=>{
  const {id}= req.params;
  let sql = "DELETE FROM dadosclient WHERE iddadosclient=?";
  db.query(sql,[id],(err, result)=>{
    if(err) console.log(err)
    else res.send(result)
  });
})

app.listen(3001, ()=> {
  console.log('Rodando servidor');
});