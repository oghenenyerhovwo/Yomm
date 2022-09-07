import express from "express";
import userRouter from "./userApi/index.js";
// import productRouter from "./productApi/index.js";
// import rentRouter from "./rentApi/index.js";
// import uploadRouter from "./fileUploadApi/index.js";
// import imageRouter from "./imageApi/index.js";

const router = express.Router();

router.use('/users', userRouter);


export default router;