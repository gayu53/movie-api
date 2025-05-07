import express from "express"
import moviesRoutes from "./routes/moviesRoutes.js"
import connectDB from "./lib/db.js"


const app = express()
const port = 6969

//connect DB
connectDB();

app.get('/', (req, res) => {
  res.json({msg:'Wellcome  hhhh'});
})


// CRUD functionality  of movies
app.use("/movies",moviesRoutes);










app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
