import express from "express";
import {
     deleteVideo,
     editVideo,
     getAllVideos,
     getVideo,
     upload,
     userVideos,
} from "../controllers/video.controller.js";
const router = express.Router();
import { verifyToken } from "../jwt/verifyToken.js";

//upload video
router.post("/", verifyToken, upload);

//edit video details
router.put("/:id", verifyToken, editVideo);

//delete video
router.delete("/:id", verifyToken, deleteVideo);

//access single video
router.get("/:id", getVideo);

//access all videos
router.get("/videos", getAllVideos);

//access user videos
router.get("/user/:id", verifyToken, userVideos);

export default router;
