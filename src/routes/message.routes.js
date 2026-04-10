import express from "express";
import { sendTemplate } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send-template", sendTemplate);

export default router;