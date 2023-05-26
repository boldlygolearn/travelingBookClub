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
    if (!firstName || !lastName || !email) {
      const missingFields = [];
      console.log(Object.keys(req.body), "req.body");
      Object.keys(fields).forEach((field) => {
        console.log(field, "field");
        if (!req.body[field]) {
          console.log("test1");
          missingFields.push(fields[field]);
        }
      });
      console.log(missingFields);
      throw new Error(`${missingFields.join()} is missing`);
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
    });

    await newUser.save();
    const { _id } = newUser;
    res.status(201).json({
      message: "User successfully created",
      firstName,
      lastName,
      _id,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

module.exports = router;
