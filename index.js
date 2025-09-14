import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app=express();

app.get("/health",(req,res)=>{
    res.status(200).json({status:"ok"});
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('app is running at',port);
});