const express = require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0-3vbyh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser:true});

app.listen(5000,function(){
  console.log("server is up a and running on port 5000");
});
