const Cart = require("../Models/cart.model")

async function createCart(user){

    try{
    const cart = new Cart({user})
    const createdCart = await cart.save();
    return createCart;
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createCart}