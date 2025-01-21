import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { loadMovies } from '../../data/MoviesContext'
import { sendMovieToServer } from '../../data/MoviesContext'
import { updateMovieInServer } from '../../data/MoviesContext'
import { deleteMovieInServer } from '../../data/MoviesContext'
import { MovieItem } from './MovieItem'
import { AdminForm } from './AdminForm'
import { Movie } from '../../data/Movie'
import './Admin.css'


const Admin = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() =>{
      const fetchData = async()=>{
        const result = await loadMovies()
        setMovies(result)
      }
      fetchData()
    }, [])
  
  const addMovie = (title, year, price) => {
    const newMovie = new Movie(Math.floor(Math.random()*10000), title, year, price)
    const newMovies = [... movies, newMovie]
  setMovies(newMovies)
  sendMovieToServer(newMovie)
  }
  
  const removeMovie = (id) => {
    const newMovies = [...movies]
    const filteredMovies = newMovies.filter((movie) => movie.id !== id ? movie : null)
    setMovies(filteredMovies)
    deleteMovieInServer(id)
  }

  const updateMovie = (id, title, year, price) => {
    const newMovie = new Movie(id, title, year, price)
    updateMovieInServer(id, newMovie)
    location.reload()
  }
  
    return (
      <section>
        <div className="admin">
          <AdminForm addMovie={addMovie} />
          <h1>Movies List</h1>
          <div className="movies-list">
  
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} removeMovie={removeMovie} updateMovie={updateMovie} />
          ))}
  
          </div>
        </div>
        <Link to="/movieseatbooking" className="btn">Back to Booking</Link>
      </section>
    )
  }
  
  export default Admin