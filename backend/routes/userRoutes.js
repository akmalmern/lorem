const express = require("express");
const {
  signUp,
  signIn,
  userProfile,
  refreshAccessToken,
  logOut,
} = require("../controller/userController");
const { isAuthenticated } = require("../middlware/isAuth");
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/user-profile", isAuthenticated, userProfile);
router.post("/refresh-token", refreshAccessToken);
router.get("/logout", logOut);
module.exports = router;
