const express=require("express");
const router=express.Router();
const productController=require("../controller/product.controller.js");
const authenticate = require("../middleware/aunthenticate.js");

router.get('/',authenticate, productController.getAllProducts); // Tested: Working 
router.get('/id/:id',authenticate, productController.findProductById); // Tested: Working 


module.exports = router;