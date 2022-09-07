import express from "express";

import { getAllUsers, deleteAllUsers, getUser }from "./controllers/index.js";
import { isAuth } from "../../utils/index.js"

const router = express.Router();

// remove all users
router.get(
    "/", 
    isAuth,
    async(req, res) => {
        getUser(req, res)
    }
);
// remove all users
router.get(
    "/getallusers", 
    async(req, res) => {
        getAllUsers(req,res)
    }
);

// get all users
router.get(
    "/deleteallusers",
    async(req, res) => {
        deleteAllUsers(req,res)
    }
);

// git subtree push --prefix server heroku master

export default router;