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


module.exports.signup_get = (req, res) => {
  res.render('signup');
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

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.login_post = async (req, res) => {
  res.send('user login')
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // const token = createToken(user._id);
    // res.cookie('jwt', token, {
    //   httpOnly: true,
    //   maxAge: maxAge * 1000,
    // });
    res.status(200).json({
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
