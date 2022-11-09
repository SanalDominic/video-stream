import express from "express";
import { register, signin } from "../controllers/auth.controller.js";
const router = express.Router();

//user register
router.post("/register", register);

//user signin
router.post("/signin", signin);

export default router;
