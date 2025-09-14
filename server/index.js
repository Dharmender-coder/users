import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// require('dotenv').config({ quiet: true });
import cors from "cors";
import route from "./routes/userRoute.js";
dotenv.config();
const app= express();
app.use(bodyParser.json());
app.use(cors());
// dotenv.config();


const PORT= process.env.PORT || 7000;
const URL= process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
console.log("DB connected successfully");
app.listen(PORT,()=>{
console.log(`server is runnig on port:${PORT}`);
})
}).catch(error=>console.log(error));

app.use("/api",route)