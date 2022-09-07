

import User from "../../../models/userModel.js"

import { findUser } from "./userFunctions.js"

export const getUser = async(req, res) => {
    try {
        const foundUser = await findUser({email: req.user.email})
        
        if(!foundUser){
            return res.status(404).send({message: "User Not Found"})
        }
        res.status(200).send({user: foundUser})    
    } catch (error) {
        console.log(error)
        res.status(404).send({message: "Server error: Could not find all users"})
    }
}


export const getAllUsers = async(req, res) => {
    try {
        const allUsers= await User.find();
        res.json(allUsers);       
    } catch (error) {
        console.log(error)
        res.status(404).send({message: "Server error: Could not find all users"})
    }
}

export const deleteAllUsers = async(req, res) => {
    try {
        const allUsers= await User.deleteMany({});
        res.json(allUsers);       
    } catch (error) {
        console.log(error)
        res.status(404).send({message: "Server error: Could not find all users"})
    }
}