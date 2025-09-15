import express from "express";
import bodyParser from "body-parser";
import { GetUser, Login, Register } from "../controller/UserController.js";
import { VerifyUser } from "../middlewares/Authenticate.js";

const UserRouter = express.Router();
UserRouter.use(bodyParser.json());


UserRouter.get("/",VerifyUser,GetUser);

UserRouter.post("/login",Login);

UserRouter.post("/signup",Register);


export default UserRouter;
