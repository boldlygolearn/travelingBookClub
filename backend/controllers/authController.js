const jwt = require('jsonwebtoken');
const User = require("../models/User");

const handleErrors = (err) => {
  if (err.code === 11000) {
    return { email: 'Email is already registered' };
  }

  const errorKeys = Object.keys(err.errors)
  if (errorKeys.length){
    return {
      message: err
    }
  }

  return  errorKeys.reduce((acc, key) => {
    acc[key] = err.errors[key].message;
  return acc;
}, {});
}

module.exports.register_post = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });
    res.status(201).json({
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({
      errors,
    });
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loggedInUser = await User.findOne({ email });
    if (!loggedInUser) {
      return res.status(404).json({
        email: "Email not found",
      });
    }
    const passwordMatch = await loggedInUser.matchPassword(password);
    if (passwordMatch) {
      const user = {
          userId: loggedInUser._id,
          firstName: loggedInUser.firstName,
          lastName: loggedInUser.lastName,
          email: loggedInUser.email,
      }

      const token = jwt.sign({ userId:  loggedInUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      return res.status(200).json({
        status: "success",
        token,
        data: {
          user
        }
      });
    } else {
      return res.status(401).json({
        password: "Invalid password",
      });
    };
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({
      errors,
    });
  }
}
