const express=require("express");
const router=express.Router();
const productController=require("../controller/product.controller.js");
const authenticate = require("../middleware/aunthenticate.js");



router.post('/', productController.createProduct);
router.post('/creates', productController.createMultipleProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);

module.exports=router;