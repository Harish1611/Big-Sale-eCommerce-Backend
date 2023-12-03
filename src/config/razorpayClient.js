const Razorpay = require('razorpay');
const dotenv = require("dotenv");

dotenv.config();

const RAZORPAY_API_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

console.log(RAZORPAY_API_KEY_ID,RAZORPAY_KEY_SECRET)


 const instance = new Razorpay({
  key_id: RAZORPAY_API_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

module.exports = instance;