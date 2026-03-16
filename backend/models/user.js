import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false
    },

    verificationToken: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;