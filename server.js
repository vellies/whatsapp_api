import app from "./src/app.js";
import { ENV } from "/src/config/env.js";

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});