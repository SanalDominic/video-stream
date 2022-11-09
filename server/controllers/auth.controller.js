import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createError } from "../error/error.js";

export const register = async (req, res, next) => {
     try {
          const user = await User.findOne({ email: req.body.email });
          console.log(user);
          if (user) return next(createError(404, "User exist"));

          const hash = await bcrypt.hash(req.body.password, 10);

          const newUser = new User({
               ...req.body,
               password: hash,
          });

          await newUser.save();
          return res.status(200).send("User has been created");
     } catch (error) {
          console.log(error);
          next(error);
     }
};

export const signin = async (req, res) => {
     try {
          const user = await User.findOne({ email: req.body.email });
          if (!user) return next(createError(404, "User not found"));

          const isCorrect = await bcrypt.compare(
               req.body.password,
               user.password
          );

          if (!isCorrect) return next(createError(400, "Invalid Credentials"));

          //  const token = jwt.sign({ id: user._id }, process.env.JWT);

          const { password, ...otherDetails } = user._doc;

          //  res.cookie("access_token", token, {
          //       httpOnly: true,
          //  })
          res.status(200).json({ otherDetails });
     } catch (error) {
          next(error);
     }
};
