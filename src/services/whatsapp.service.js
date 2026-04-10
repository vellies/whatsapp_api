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

export const sendTemplateMessage = async (to, templateName) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v20.0/${ENV.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: templateName,
          language: {
            code: "en_US",
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ENV.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Template Message Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/**
 * Send Text Message
 */
export const sendTextMessage = async (to, message) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v22.0/${ENV.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ENV.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Text Message Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};