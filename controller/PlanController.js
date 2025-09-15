import slugify from "slugify";
import Plan from "../model/Plan.js";

export const CreatePlan = (req, res) => {
  Plan.create({
    name: req.body.name,
    price: req.body.price,
    limit: req.body.limit
  })
    .then((plan) => {
      res.status(201).json({
        plan: plan
      });
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};

export const GetPlan = (req, res) => {
  Plan.find({}).
    then((plan) => {
      res.status(201).json({
        plan: plan,
      });
    }).catch((err) => {
      res.status(500).json({ err: err });
    });
};
