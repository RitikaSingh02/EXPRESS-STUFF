const express=require("express");

const app=express();//this creates the express application
//console.log(app);
//app.get(route,callback);
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!");
});

const port =8001;
app.listen(port,()=>
{
    console.log(`listening to the port ${port}`);
});