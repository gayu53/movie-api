import Movie from "../models/movie.models.js"

export const MovieIndex = (req, res) => {
  res.send("Get all the movie list");
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


export const MovieUpdate = (req, res) => {
  res.send("Update the movie");
};
export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};

