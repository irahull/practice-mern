const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");

const home = async (req, res) => {
  try {
    res.send("this ia home section");
  } catch (error) {
    console.log(error);
  }
};
// ____________________________________ Register APi

const register = async (req, resp) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return resp.status(400).json({ msg: "filled the proper data" });
    }

    //   _______________________Check User Exits_______________________________
    const userExist = await User.findOne({ email });

    if (userExist) {
      return resp.status(400).json({ msg: "User Already Exits" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      resp.status(201).json({
        success: true,
        msg: "User Created Successfully",
        token: await newUser.generateToken(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// ____________________________________ Login APi

const login = async (req, resp) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400).json({ msg: "Fill data" });
    }

    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return resp.status(400).json({ msg: "User Not Found" });
    }

    // const checkPass = await bcrypt.compare(password, checkUser.password);
    const checkPass = await checkUser.comparePassword(password);

    if (checkPass) {
      resp.status(200).json({
        success: true,
        msg: "User Login Successfull",
        token: await checkUser.generateToken(),
      });
    } else {
      resp.status(400).json({ msg: "password not match" });
    }
  } catch (error) {
    resp.status(400).json({ msg: "internal server error" });
  }
};

module.exports = { home, register, login };
