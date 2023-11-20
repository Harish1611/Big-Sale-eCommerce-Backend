const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  mobile: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("addresses", AddressSchema);

module.exports = Address;
