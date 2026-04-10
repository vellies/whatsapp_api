import express from "express";
import webhookRoutes from "./routes/webhook.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

// routes
app.use("/webhook", webhookRoutes);

// error handler
app.use(errorMiddleware);

export default app;