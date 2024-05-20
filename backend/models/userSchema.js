const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});


// ------------------------------- hashing a Password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// _________________Comparing a hash Password________________

userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id,
        name: this.name,
        email: this.email,
      },
      process.env.ACESS_TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
