import express from "express"
let app=express();
let PORT=process.env.PORT||8000
import appRoutes from "./Routes/homeRoute.js"
app.use(express.json());
app.use("/",appRoutes)

app.listen(PORT,()=>console.log("I am fired up"))