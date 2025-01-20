import React from 'react'

export const ShowMovie = ({ movie }) => {
  return (
    <>
        <option value={ movie.price }>{ movie.title } ($ { movie.price } p/p)</option>
    </>

  )
}