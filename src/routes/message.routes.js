import express from "express";
import { sendTemplate,sendText } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send-template", sendTemplate);
router.post("/send-text", sendText);

export default router;