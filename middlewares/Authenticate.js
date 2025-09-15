import jwt from "jsonwebtoken";

export const VerifyUser = (req, res, next) => {
  const authtoken = req.headers["authorization"];
  const token = authtoken && authtoken.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.status(401).json({ message: "Unathorized Access" });
    } else {
      req.user = user;
      next();
    }
  });
};

export const VerifyAdmin = (req, res, next) => {
  const authtoken = req.headers["authorization"];
  const token = authtoken && authtoken.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.status(401).json({ message: "Unathorized Access" });
    } else {
      req.user = user;
      if (req.user && req.user.user.admin) {
        next();
      } else {
        res.status(403).json({ message: "Forbidden: Admins only" });
      }
    }
  });
};
