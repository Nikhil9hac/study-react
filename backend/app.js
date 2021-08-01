
const express=require('express');
const app=express();
const db=require('../db/conn');
const dbRouter=require("../router/userRouter");
const path=require('path');


// app.use(express.static(clientPath))
// console.log(clientPath)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(dbRouter)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port=process.env.PORT||5000;

app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log('listening to port no '+port);
})