const User = require("../../models/User")
const createToken = require("../utils/createToken")

const handleErrors = (err) => {
  if (err.code === 11000) {
    return { email: "Email is already registered" }
  }

  // TODO: see if there are keys in error object so db won't crash

  return Object.keys.reduce((acc, key) => {
    acc[key] = err.errors[key].message
    return acc
  }, {})
}

module.exports.register_post = async (req, res) => {
  const { email, password, firstName, lastName } = req.body
  try {
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    })
    const token = createToken(user._id)
    res.cookie("jwt", token, {
      httpOnly: true,
      // secure: true, // Use this if your app is using HTTPS
      maxAge: 1000 * 60 * 24 * 90,
    })

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
    })
  } catch (error) {
    const errors = handleErrors(error)
    res.status(400).json({
      errors,
    })
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body
  try {
    const loggedInUser = await User.findOne({ email })
    if (!loggedInUser) {
      return res.status(404).json({
        email: "Email not found",
      })
    }
    const passwordMatch = await loggedInUser.matchPassword(password)
    if (passwordMatch) {
      const user = {
        id: loggedInUser._id,
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        email: loggedInUser.email,
      }

      const token = createToken(user.id)
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 24 * 90,
      })
      return res.status(200).json({
        status: "success",
        data: {
          user,
        },
      })
    } else {
      return res.status(401).json({
        password: "Invalid password",
      })
    }
  } catch (error) {
    const errors = handleErrors(error)
    res.status(400).json({
      errors,
    })
  }
}
