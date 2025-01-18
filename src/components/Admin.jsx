import { Link } from "react-router-dom"
import { useState } from 'react'
import { loadMovies } from '../data/moviesContext'

const Admin = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Lion King",
      year: "2019",
      price: 100
    },
    {
      id: 2,
      title: "Mowgli: Legend of the Jungle",
      year: "2018",
      price: 40
    },
    {
      id: 3,
      title: "Doctor Strange",
      year: "2016",
      price: 120
    },
    {
      id: 4,
      title: "John Wick",
      year: "2014",
      price: 60
    }
  ])
  
    return (
      <section>
        <div className="app">
          <h1>Movies List</h1>
          <div className="movies-list">
  
          {movies.map((movie) => (
            <div className="movie">
              <div className="movie-content"></div>
                <p> {movie.title} </p>
            </div>
          ))}
  
          </div>
          <Link to="/movieseatbook" className="btn">Back to Booking</Link>
        </div>
      </section>
    )
  }
  
  export default Admin