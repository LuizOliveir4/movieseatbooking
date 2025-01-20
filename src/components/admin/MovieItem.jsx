import React from 'react'
import EditForm from './EditForm'

export const MovieItem = ({movie, removeMovie, updateMovie}) => {
  return (
    <div className="movie">
    <div className="movie-content">
      <p className="movie-item"> {movie.title} ({movie.year}) </p>
      <p className="movie-item"> $ {movie.price} </p>
    </div>
    <div>
      <EditForm movie={movie} updateMovie={updateMovie}/>
      <button className="remove" onClick={() => removeMovie(movie.id)}>X</button>
    </div>
  </div>
  )
}
