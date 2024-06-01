import Users from "../models/users.js";
import jwt from "jsonwebtoken";
const getUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Users.findOne({ email });
    if(!user){
      console.log(user)
      res.status(500).json({message:"No user found"})
    }
    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err;
      if (!isMatch) {
        res.status(500).json({message:"Incorrect credentials"})
        return;
      }
      const token = jwt.sign({ id: user["_id"] }, process.env.JWT_SECRET, {
        expiresIn: 300,
      });
      res.status(200).send({ user_token: token });
    });
  } catch (e) {
    res.send(e);
  }
};

const insertUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
    if (password !== confirm_password) {
      res.status(500).json({message:"Incorrect credentials"})
      return
    }
    const newUser = await new Users({
      email,
      password,
    });
    const user = await newUser.save();
    const token = jwt.sign({ id: user["_id"] }, process.env.JWT_SECRET, {
      expiresIn: 300,
    });
    res.status(200).send({ user_token: token });
  } catch (err) {
    res.status(err.code).send(err.message);
  }
};

export { getUser, insertUser };
