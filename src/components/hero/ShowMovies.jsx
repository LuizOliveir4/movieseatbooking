import React from 'react'
import { loadMovies } from '../../data/MoviesContext'
import { ShowMovie } from '../hero/ShowMovie'
import { useState, useEffect } from 'react'


export const ShowMovies = () => {

  //console.log(loadMovies())
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    const fetchData = async()=>{
      const result = await loadMovies()
      setMovies(result)
    }
    fetchData()
  }, [])

  // const [movies, setMovies] = useState([
  //   {
  //     id: 1,
  //     title: "The Lion King",
  //     year: "2019",
  //     price: 100
  //   },
  //   {
  //     id: 2,
  //     title: "Mowgli: Legend of the Jungle",
  //     year: "2018",
  //     price: 40
  //   },
  //   {
  //     id: 3,
  //     title: "Doctor Strange",
  //     year: "2016",
  //     price: 120
  //   },
  //   {
  //     id: 4,
  //     title: "John Wick",
  //     year: "2014",
  //     price: 60
  //   }
  // ])

  return (
        <div className="movie-container">
        <label htmlFor="movie">Pick a movie:</label>
            <select name="movie" id="movie">
                {movies.map((movie) => (
                    <ShowMovie key={movie.id} movie={movie} />
                ))}
            </select>
        </div>
  )
}