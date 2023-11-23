const express=require("express");
const authenticate = require("../middleware/aunthenticate.js");
const router=express.Router();
const orderController=require("../controller/order.controller.js")

router.post("/",authenticate,orderController.createOrder); // Tested: Working 
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);


module.exports=router;