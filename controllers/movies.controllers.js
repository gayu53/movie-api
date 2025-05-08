import Movie from "../models/movie.models.js"

export const MovieIndex = async(req, res) => {
  try {
        const movie= await Movie.find();
        res.json(movie)
  } catch (error) {
    return res.status(500).json({message:error.message})
    
  }
};

export const MovieCreate = async (req, res) => {
  // id,title, desc
  // validate the data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
 
};

export const MovieDetail = async(req, res) => {
 try {
   const movie =await Movie.findById(req.params.id)
   
    if(movie == null) {
       return res.status(404).json({message:"Cannot find Movie"})
    }else{
    res.json(movie)
    }
  
 } catch (error) {
  return res.status(400).json({ message: error.message });
 }
};


export const MovieUpdate = async(req, res) => {
  
try {
  const UpdatedMovie=  await Movie.findOneAndUpdate({_id:req.params.id},
  {
    title:req.body.title,
    desc: req.body.desc,
  },{
    new:true
  }
);
return res.status(200).json(UpdatedMovie);
} catch (error) {
  return res.status(400).json({ message: error.message });
}

};
export const MovieDelete = async (req, res) => {
  const movieId = req.params.id;
 
  try {
       const DeleteMovie = await Movie.deleteOne({_id:movieId});
       res.json({message:"movie Deleted"});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

