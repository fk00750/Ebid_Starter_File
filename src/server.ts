import app from "./app";

import { config } from "dotenv";
config({ path: ".env" });

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

const StartServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Connected to server and running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

StartServer();
