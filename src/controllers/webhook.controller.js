import { ENV } from "../config/env.js";
import { sendMessage } from "../services/whatsapp.service.js";

export const verifyWebhook = (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === ENV.VERIFY_TOKEN) {
    console.log("Webhook verified");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
};

export const handleWebhook = async (req, res, next) => {
  try {
    const body = req.body;

    const message =
      body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (message) {
      const from = message.from;
      const text = message.text?.body;

      console.log("Incoming:", text);

      await sendMessage(from, `You said: ${text}`);
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};