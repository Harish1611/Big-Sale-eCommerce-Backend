const express=require("express");
const authenticate = require("../middleware/aunthenticate.js");
const router=express.Router();
const cartController=require("../controller/cart.controller.js")

// GET: /api/cart
router.get("/", authenticate, cartController.findUserCart);   // Tested:Wroking

// PUT: /api/cart/add
router.put("/add", authenticate, cartController.addItemToCart);  // Tested:Wroking


module.exports=router;