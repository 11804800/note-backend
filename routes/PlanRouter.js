import bodyParser from 'body-parser'
import express from 'express'
import { CreatePlan, GetPlan } from '../controller/PlanController.js';

const PlanRouter=express.Router();
PlanRouter.use(bodyParser.json());

PlanRouter.get("/",GetPlan);
PlanRouter.post("/",CreatePlan);

export default PlanRouter;