const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
// import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  isAdmin: Boolean,
  password: String,
  pic: String,
  //    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
});

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userSchema);

// export default User;
module.exports = User;
