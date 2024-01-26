import express from "express"
let router=express.Router()
import Booking from "../controller/Booking.js"
router.post("/",Booking.addRoom)
router.post("/bookRoom",Booking.bookRoom)
router.get("/bookedRoom",Booking.bookedRoom)
router.get("/bookedCustomer",Booking.bookedCustomer)
router.get("/getDetails",Booking.listAllDetails)
export default router