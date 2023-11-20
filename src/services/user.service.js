const User = require("../Models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try{
        let {firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({email});

        if( isUserExist ){
            throw new Error("User already Exists with email : ", ElementInternals)
        }

        password = await bcrypt.hash(password,8);

        const user = await User.create({firstName,lastName,email,password});

        console.log("User Created Successfully", user);

        return user;
    }catch (error){
        throw new Error(error.message);
    }
}


const findUserById = async (userId) => {

    try{

        const user = await User.findById(userId);

        if(!user){
            throw new Error("User not found with id :", userId)
        }

        return user;
    }catch(error){

        throw new Error(error.message)

    }
}


const findUserByEmail = async (email) => {

    try{

        const user = await User.findOne(email);

        if(!user){
            throw new Error("User not found with email :", email)
        }

        return user;
    }catch(error){

        throw new Error(error.message)

    }
}


module.export = {createUser, findUserById, findUserByEmail};