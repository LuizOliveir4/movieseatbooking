import React from 'react'

export const MovieItem = ({movie, removeMovie}) => {
  return (
    <div className="movie">
    <div className="movie-content">
      <p className="movie-item"> {movie.title} ({movie.year}) </p>
      <p className="movie-item"> $ {movie.price} </p>
    </div>
    <div>
      <button className="edit">Edit</button>
      <button className="remove" onClick={() => removeMovie(movie.id)}>X</button>
    </div>
  </div>
  )
}
