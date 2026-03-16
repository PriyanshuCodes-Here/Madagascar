import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import dns from "dns";
import app from "./app.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
console.log("EMAIL:", process.env.EMAIL_USER)

startServer();