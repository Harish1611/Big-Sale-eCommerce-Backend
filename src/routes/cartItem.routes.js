const express=require("express");
const authenticate = require("../middleware/aunthenticate.js");
const router=express.Router();

const cartItemController=require("../controller/cartItem.controller.js");

router.put("/:id",authenticate,cartItemController.updateCartItem); // Tested: Working
router.delete("/:id",authenticate,cartItemController.removeCartItem); //Tested: Wroking

module.exports=router;