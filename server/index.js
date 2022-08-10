import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || PORT, () => console.log("Listening"))
  )
  .catch((error) => console.log(error));

//   USAGE OF ROUTES
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
