import { sendTemplateMessage } from "../services/whatsapp.service.js";

export const sendTemplate = async (req, res, next) => {
  try {
    const { to, templateName } = req.body;

    if (!to || !templateName) {
      return res.status(400).json({
        success: false,
        message: "to and templateName are required",
      });
    }

    const data = await sendTemplateMessage(to, templateName);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};