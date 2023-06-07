const User = require("../models/User");

const handleErrors = (err) => {
  if (err.code === 11000) {
    return { email: 'Email is already registered' };
  }
return  Object.keys(err.errors).reduce((acc, key) => {
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
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        email: "Email not found",
      });
    }
    const passwordMatch = await user.matchPassword(password);
    if (passwordMatch) {
      return res.status(200).json({
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
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
