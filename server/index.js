import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

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
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () => console.log("Listening"))
  )
  .catch((error) => console.log(error));

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
//   app.use(express.static("client-side/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/client-side/build/index.html"));
//   });
// }
