import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//Creating a token
const generateToken = (id) => {
  return jwt.sign({ userID: id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//Function to register a fcking client
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const found = await User.findOne({ email });

    if (found) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Login function to get the bitch logged
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpsOnly: true,
      security: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });
    res.json({ role: user.role });
    console.log("User role from DB:", user.role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//User logging out
export const logoutUser = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out" });
};
