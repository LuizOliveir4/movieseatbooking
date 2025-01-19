import { Link } from "react-router-dom"
import { useState } from 'react'
import { MovieItem } from './MovieItem'
import { AdminForm } from './AdminForm'
import { Movie } from '../../data/Movie'
import './Admin.css'

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
  
  const addMovie = (title, year, price) => {
    const newMovie = new Movie(Math.floor(Math.random()*10000), title, year, price)
    const newMovies = [... movies, newMovie
  ]
  setMovies(newMovies)
  }
  
  const removeMovie = (id) => {
    const newMovies = [...movies]
    const filteredMovies = newMovies.filter((movie) => movie.id !== id ? movie : null)
    setMovies(filteredMovies)
  }
  
  //const editMovie = (id) => {
  //  const newMovies = [...movies]
  //  newMovies.map((movie) => movie.id === id ? movie.id = id  : movie)
  //}
  
    return (
      <section>
        <div className="admin">
          <h1>Movies List</h1>
          <div className="movies-list">
  
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} removeMovie={removeMovie} />
          ))}
  
          </div>
          <AdminForm addMovie={addMovie} />
        </div>
        <Link to="/movieseatbooking" className="btn">Back to Booking</Link>
      </section>
    )
  }
  
  export default Admin