import React from 'react'
import { ShowMovieOption } from './ShowMovieOption'

const SelectMovie = ( {hadleChange, movies} ) => {
  return (
        <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
            <select name="movie" id="movie" onChange={hadleChange}>
                {movies.map((movie) => (
                    <ShowMovieOption key={movie.id} movie={movie} />
                ))}
            </select>
        </div>
  )
}

export default SelectMovie