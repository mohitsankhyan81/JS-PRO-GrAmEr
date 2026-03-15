import { User } from "../model/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const user = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (user) {
      return res.status(400).json({
        message: "User already registered"
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashpassword
    });
    const refreshtoken = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      refreshtoken
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getme = async (req, res) => {

  const token = req.cookies.refreshtoken;

  if (!token) {
    return res.status(400).json({ message: "token not found" });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decode.id);

  res.status(200).json({ message: "user", user });
};