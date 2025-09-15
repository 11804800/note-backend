import bodyParser from 'body-parser'
import express from 'express'
import { CreateTenant, GetTenant } from '../controller/TenantCotroller.js';

const TenantRouter=express.Router();
TenantRouter.use(bodyParser.json());

TenantRouter.get("/",GetTenant);
TenantRouter.post("/",CreateTenant);

export default TenantRouter;