const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "ismni kiritishingiz shart"],
    },
    email: {
      type: String,
      required: [true, "E-mailingizni kiritishjingiz shart"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "bu email emas tekshirib koring",
      ],
    },
    password: {
      type: String,
      required: [true, "parolni kiritishingiz shart"],
      match: [
        /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
        "Parolda kamida 1 ta katta harf, 1 ta kichik harf, 1 ta raqam va maxsus belgi boʻlishi kerak.",
      ],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
