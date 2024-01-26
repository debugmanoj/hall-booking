import express, { Router } from "express"
import controller from "../controller/controllerIndex.js"
import BookingRoute from "./BookingRoute.js"
let router=express.Router();
router.get("/",controller.HomePage)

//Endpoints Routes
router.use("/booking",BookingRoute)


export default router