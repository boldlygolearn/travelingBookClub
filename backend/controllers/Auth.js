const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      throw new Error("The user schema is not complete");
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
    });

    await newUser.save();

    res.status(200).json({
      message: "User successfully create",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

module.exports = router;
