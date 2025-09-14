import express from 'express';
import bodyParser from 'body-parser';
import { DeleteOneNote, getAllNote, getOneNote, PostNote, UpdateNote } from '../controller/NoteController.js';

const NoteRouter=express.Router();
NoteRouter.use(bodyParser.json());


NoteRouter.get("/",getAllNote);

NoteRouter.post("/",PostNote);

NoteRouter.get("/:id",getOneNote);

NoteRouter.put("/:id",UpdateNote);

NoteRouter.delete("/:id",DeleteOneNote);

export default NoteRouter;