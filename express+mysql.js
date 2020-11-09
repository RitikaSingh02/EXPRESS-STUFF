const express=require("express")
const mysql=require("mysql")
const app=express()

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"***",
    database:"db"
});

connection.connect((err)=>{
if(err)
    console.log(err);
else
    console.log("connected");
});

app.get("/",(req,res)=>{
    connection.query("SELECT NAme from tablename",(err,rows,fields)=>{
        if(err)
            console.log("CHECK THE QUERY");
        else{
            console.log("GD TO GO");
            console.log(rows);
            // console.log(fields);
            var i=0;
            var response=[]
            while(rows[i])
            {
                response.push(rows[i]);
                i++;
            }
            res.json(response);
        }
    })
})

app.listen(8001);