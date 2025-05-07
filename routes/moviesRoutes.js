import express from "express"
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controllers";

const router=express.Router();



// R -for Reading 
router.get("/",MovieIndex);

// C -for Creating movies 
router.post("/",MovieCreate);

// E -for  Edit the movie 
router.put("/:id",MovieUpdate);

// D -for Delete the movie 
router.delete("/:id",MovieDelete);



export default router