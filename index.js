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

const allowedOrigins = [
  'https://note-frontend-alpha.vercel.app'
];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true,   
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



app.use("/notes",NoteRouter);
app.use("/plan",PlanRouter);
app.use('/tenantType',TenantRouter);
app.use("/tenants",UserRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>")
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is running at", port);
});
