import axios from "axios";
import { ENV } from "../config/env.js";

export const sendMessage = async (to, message) => {
  try {
    await axios.post(
      `https://graph.facebook.com/v18.0/${ENV.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${ENV.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(
      "WhatsApp API Error:",
      error.response?.data || error.message
    );
  }
};