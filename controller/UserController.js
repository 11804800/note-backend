import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import slugify from "slugify";


export const GetUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.user.username,tenant:req.user.user.tenant });
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

export  const GetAllUser=async(req,res)=>{
  try{
    const Users=await User.find({tenant:req.user.user.tenant});
    res.status(200).json({ Users: Users });
  }
  catch(err)
  {
     res.status(500).json({ err: err });
  }
}

export const Register = async (req, res) => {
  try {
    const { firstname, lastname, username, password, tenant, plan, admin } =
      req.body;
    const isUserExist = await User.findOne({
      $and: [{ username: username }, { tenant: "acme" }],
    });
    if (isUserExist) {
      res.status(403).json({ success: false, message: "User already exists" });
    } else {
      const hash_password = await bcrypt.hash(password, 10);
      const user = await User.create({
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: hash_password,
        tenant: tenant,
        plan: plan,
        admin: admin,
        slug:slugify(username, { lower: true, strict: true })
      });
      const token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      res.status(201).json({
        success: true,
        token: token,
        message: "User Regsitration Successfull",
      });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password, tenant } = req.body;
    const user = await User.findOne({
      $and: [{ username: username }, { tenant: tenant }],
    });

    if (!user) {
      res.status(403).json({ message: "User Does Not Exist" });
    } else {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
          expiresIn: "30d",
        });
        if (user.admin) {
          res.status(200).json({ message: "Welcome Admin", token: token });
        }
        res.status(200).json({ message: "Login Successfull", token: token });
      } else {
        res.status(401).json({ message: "Username or Password is Incorrect" });
      }
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

export const UpdatePlan = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.user.user.username },
      { $set: { plan: req.body.plan } },
      { new: true }
    );
    res
      .status(201)
      .json({ success: true, message: "Plan Upgraded to pro", user: user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const UpgradePlan = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { slug: req.slug, },
      { $set: { plan: req.body.plan } },
      { new: true }
    );
    res
      .status(201)
      .json({ success: true, message: "Plan Upgraded to pro", user: user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
