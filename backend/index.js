const express = require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://me:create123@cluster0-3vbyh.mongodb.net/IIC?retryWrites=true&w=majority",{useNewUrlParser:true});

app.listen(5000,function(){
  console.log("server is up a and running on port 5000");
});
