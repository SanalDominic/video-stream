import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

import authRoutes from "./routes/auth.js";
import videoRoutes from "./routes/video.js";

mongoose
     .connect(process.env.DB)
     .then(() => console.log("DB Connected"))
     .catch((err) => console.log(err));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);

app.use((err, req, res, next) => {
     const status = err.status || 500;
     const message = err.message || "Something went wrong";
     return res.status(status).json({
          success: false,
          status,
          message,
     });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Connected to port ${port}`));
