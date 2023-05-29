const router = require("express").Router();
const User = require("../models/User");

const fields = {
  firstName: "first name",
  lastName: "last name",
  email: "email",
};
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email,
    });

    await newUser.save();
    res.status(201).json({
      message: "User successfully created",
      firstName,
      lastName,
      id: newUser._id,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

module.exports = router;
