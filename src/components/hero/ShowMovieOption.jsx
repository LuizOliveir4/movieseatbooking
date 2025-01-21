import React from 'react'

export const ShowMovieOption = ({ movie }) => {
  return (
    <>
        <option value={ movie.price }>{ movie.title } ($ { movie.price } p/p)</option>
    </>

  )
}