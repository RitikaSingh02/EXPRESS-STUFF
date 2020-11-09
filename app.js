//KINDLY NOTE THESE PARAMS IN RESPONSE HEADERS IN THE BROWSER
//Keep-Alive: timeout=5
// X-Powered-By: Express


const express=require("express");

const app=express();//this creates the express application
//console.log(app);
//app.get(route,callback);
app.get('/',(req,res)=>{
    res.json(
        {
            id:1,
            name:"RITIKA SINGH",
            branch:"CSE"
        }
    );
});

app.get('/test/',(req,res)=>{
    res.json(null);//content type =JSON
    //"null" is send as a res
});

app.get('/test1/',(req,res)=>{
    res.send(null);//no content tyoe is defined and "null" is not send as a res
});

app.get('/first-route/',(req,res)=>{
    res.send(
        {
            id:1,
            name:"RITIKA SINGH",
            branch:"CSE"
        }
    );
});
const port =8001;
app.listen(port,()=>
{
    console.log(`listening to the port ${port}`);
});
