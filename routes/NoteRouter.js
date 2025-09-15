import express from 'express';
import bodyParser from 'body-parser';
import { DeleteOneNote, getAllNote, getOneNote, PostNote, UpdateNote } from '../controller/NoteController.js';
import { VerifyUser } from '../middlewares/Authenticate.js';

const NoteRouter=express.Router();
NoteRouter.use(bodyParser.json());


NoteRouter.get("/",VerifyUser,getAllNote);

NoteRouter.post("/",VerifyUser,PostNote);

NoteRouter.get("/:id",VerifyUser,getOneNote);

NoteRouter.put("/:id",VerifyUser,UpdateNote);

NoteRouter.delete("/:id",VerifyUser,DeleteOneNote);

export default NoteRouter;