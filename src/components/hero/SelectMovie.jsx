import React from 'react'
import { loadMovies } from '../../data/MoviesContext'
import { ShowMovieOption } from './ShowMovieOption'
import { useState, useEffect } from 'react'

export const SelectMovie = ( ) => {

  const [movies, setMovies] = useState([])

  useEffect(() =>{
    const fetchData = async()=>{
      const result = await loadMovies()
      setMovies(result)
    }
    fetchData()
  }, [])

  const hadleChange = (e) => {
    let price = {price: e.target.value}
    console.log(price)
    return price
    //this.setPrice({ price: e.target.value })
  }

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