import express from "express"


const router=express.Router();

// /movies/movies

// R -for Reading 

router.get("/",(req,res)=>{
 res.send("Get all the movie list")
});

// C -for Creating movies 

router.post("/",(req,res)=>{
    res.send("Create a movies")
   });
   // R -for Reading 

router.put("/:id",(req,res)=>{
    res.send("Update the movie")
   });
   // R -for Reading 

router.delete("/:id",(req,res)=>{
    res.send("Delete a movie")
   });


   export default router