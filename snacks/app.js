const express=require('express');
const app=express()
const mongoose=require('mongoose');

app.use(express.json());
//import routes
const snackRoute=require('./routes/snacks');
app.use('/snacks',snackRoute);

const uploadRoute=require('./routes/fileuploads');
app.use('/images',uploadRoute);
//routes

//listening
mongoose.connect("mongodb://localhost:27017/kavyadb",()=>{
         console.log("connected to DB");
});
app.listen(3000);