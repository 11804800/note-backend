import express from "express";
import bodyParser from "body-parser";
import { GetAllUser, GetUser, Login, Register, UpgradePlan,UpdatePlan } from "../controller/UserController.js";
import { VerifyAdmin, VerifyUser } from "../middlewares/Authenticate.js";

const UserRouter = express.Router();
UserRouter.use(bodyParser.json());


UserRouter.get("/",VerifyUser,GetUser);

UserRouter.post("/login",Login);

UserRouter.post("/signup",Register);

UserRouter.put("/upgrade",VerifyUser,UpdatePlan);

UserRouter.put("/:slug/upgrade",VerifyAdmin,UpgradePlan);

UserRouter.get('/getall',VerifyAdmin,GetAllUser);


export default UserRouter;
