import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import uploadRoute from "./Routes/UploadRoute.js";

const app = express();

// SERVE IMAGES FOR PUBLIC
app.use(express.static("Public"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const corsOptions = {
    origin: 'http://localhost:5000',
    credentials: true,

}
app.use(cors(corsOptions));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_URI));

    console.log(`mongo database is connected!!! ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error: ${error} `);
    process.exit(1);
  }
};

connectDB();

//   USAGE OF ROUTES
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/post", PostRoute);
app.use("/api/upload", uploadRoute);
app.use("/images", express.static("Images"));

// HEROKU DEPLOY
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  const root = path.join(__dirname, "../", "client-side", "build");
  app.use(express.static(root));
  app.get("/api", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
