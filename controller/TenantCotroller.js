import Tenant from "../model/Tenants.js";

export const CreateTenant = (req, res) => {
  Tenant.create({
    name: req.body.name,
  })
    .then((tenant) => {
      res.status(201).json({
        tenant: tenant,
      });
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};

export const GetTenant = (req, res) => {
  Tenant.find({}).
    then((tenant) => {
      res.status(201).json({
        tenant: tenant,
      });
    }).catch((err) => {
      res.status(500).json({ err: err });
    });
};
