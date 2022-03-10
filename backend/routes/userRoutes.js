const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../Controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/registerUser").post(registerUser);
router.route("/loginUser").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
