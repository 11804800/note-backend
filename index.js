import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import NoteRouter from "./routes/NoteRouter.js";
import PlanRouter from "./routes/PlanRouter.js";
import TenantRouter from "./routes/TenantRouter.js";
import UserRouter from "./routes/UserRouter..js";

mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });



const app = express();

app.use(cors({
  origin: 'https://note-frontend-pi.vercel.app', 
  methods: ['POST',"GET","PUT","DELETE", 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true,
}));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://note-frontend-pi.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use("/notes",NoteRouter);
app.use("/plan",PlanRouter);
app.use('/tenantType',TenantRouter);
app.use("/tenants",UserRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is running at", port);
});
