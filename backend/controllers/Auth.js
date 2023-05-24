const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName) {
      throw new Error("the first name is missing");
    }
    if (!lastName) {
      throw new Error("last name missing");
    }
    if (!email) {
      throw new Error("email missing");
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
    });

    await newUser.save();

    res.status(201).json({
      message: "User successfully created",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

module.exports = router;
