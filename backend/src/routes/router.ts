import express from "express";
import { login, register }from "./auth"
import { quote } from "./quote"
import authenticateUser from "../middleware/authMiddle";


const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get('/quote/:ticker', authenticateUser, quote)

export default router