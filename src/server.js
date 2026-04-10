import app from "./app.js";
import { ENV } from "./config/env.js";


app.get("/", (req, res) => {
  const now = new Date();

  res.json({
    message: "Hi, Vellies API Running",
    date: now.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata"
    }),
    time: now.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata"
    }),
    timezone: "Asia/Kolkata (IST)",
    location: "India",
    timestamp: now.toISOString()
  });
});


app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});