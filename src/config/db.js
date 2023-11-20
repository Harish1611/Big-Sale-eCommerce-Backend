const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const URL = process.env.MONGODB_URL;




const connectDB = () => {

    return mongoose.connect(URL); 

}

module.exports = {connectDB};