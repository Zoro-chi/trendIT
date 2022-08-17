import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
dotenv.config();

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import uploadRoute from "./Routes/UploadRoute.js";

const app = express();

// SERVE IMAGES FOR PUBLIC
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_URI))
      
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

// // HEROKU DEPLOY
// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "staging"
// ) { 
//   app.use(express.static("Public"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/Public/build/index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
