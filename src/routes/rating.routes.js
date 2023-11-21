const express = require("express");
const authenticate = require("../middleware/aunthenticate.js");
const router = express.Router();
const ratingController = require("../controller/rating.controller.js");

router.get("/create",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getProductsRating);


module.exports=router;