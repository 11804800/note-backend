import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const GetUser = async (req, res) => {
  try {
    const user =await User.findOne({username:req.user.user.username});
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

export const Register = async (req, res) => {
  try {
    const { firstname, lastname, username, password, tenant, plan } = req.body;
    const isUserExist = await User.findOne({ username: username });
    if (isUserExist) {
      res.status(403).json({ success: false, message: "User already exists" });
    } else {
      const hash_password = await bcrypt.hash(password, 10);
      User.create({
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: hash_password,
        tenant: tenant,
        plan: plan,
      });
      res
        .status(201)
        .json({ success: true, message: "User Regsitration Successfull" });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
      res.status(403).json({ message: "User Does Not Exist" });
    } 
    else {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
          expiresIn: "30d",
        });
        res.status(200).json({ message: "Login Successfull", token: token });
      } 
      else {
        res.status(401).json({ message: "Username or Password is Incorrect" });
      }
    }

  } catch (err) {
    res.status(500).json({ err: err });
  }
};
