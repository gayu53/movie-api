export const MovieIndex = (req,res)=>{
    res.send("Get all the movie list")
   };
   export const MovieCreate =  (req,res)=>{
    // id,title, desc
    // create the move info 
    console.log(req.body);
    return res.json(req.body);


    // res.send("Create a movies")
   };
   export const MovieUpdate =(req,res)=>{
    res.send("Update the movie")
   }
   export const MovieDelete = (req,res)=>{
    res.send("Delete a movie")
   }