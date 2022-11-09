import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
     user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
     },
     url: {
          type: String,
          required: true,
     },
     thumbnail: {
          type: String,
     },
     duration: {
          type: Number,
          required: true,
     },
     format: {
          type: String,
     },
     title: {
          type: String,
          required: true,
     },
     description: {
          type: String,
          required: true,
     },
});

export default mongoose.model("Video", videoSchema);
