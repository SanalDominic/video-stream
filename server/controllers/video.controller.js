import Video from "../models/video.model.js";
import { createError } from "../error/error.js";

export const getVideo = async (req, res) => {
     console.log(req.body);
};

export const getAllVideos = async (req, res) => {
     console.log(req.body);
};

export const userVideos = async (req, res) => {
     console.log(req.body);
};

export const upload = async (req, res) => {
     try {
          const newVideo = new Video({ ...req.body });
          await newVideo.save();
          return res.status(200).send("Video has been created");
     } catch (error) {
          createError(error);
     }
};

export const deleteVideo = async (req, res) => {
     console.log(req.body);
};

export const editVideo = async (req, res) => {
     console.log(req.body);
};
