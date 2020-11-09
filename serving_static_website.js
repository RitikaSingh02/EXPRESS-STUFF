const express=require("express");
const path =require("path");
const app=express();//this creates the express application
console.log(__dirname);
const path_=path.join(__dirname,"/public");
console.log(path_);
//using the builtin middleware
app.use(express.static(path_))
app.get('/first-route/',(req,res)=>{
    res.send("SERVED A LOCAL STATIC WEBSITE");
});
const port =8001;
app.listen(port,()=>
{
    console.log(`listening to the port ${port}`);
});
