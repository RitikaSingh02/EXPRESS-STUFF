const express=require("express");
const path =require("path");
const app=express();//this creates the express application
console.log(__dirname);
const path_=path.join(__dirname,"/public");
console.log(path_);
//setting the view engine
app.set('view engine','hbs');

app.get("",(req,res)=>{
    res.render("index");
})
app.get('/first-route/',(req,res)=>{
    res.send("SERVED A LOCAL STATIC WEBSITE");
});
const port =8001;
app.listen(port,()=>
{
    console.log(`listening to the port ${port}`);
});
