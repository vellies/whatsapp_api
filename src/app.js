import express from "express";
import webhookRoutes from "./routes/webhook.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(express.json());

// routes
app.use("/webhook", webhookRoutes);
app.use("/api/messages", messageRoutes);

// error handler
app.use(errorMiddleware);

export default app;