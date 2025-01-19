import React from 'react'
import { useState } from 'react'

export const AdminForm = ({ addMovie }) => {

  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [price, setPrice] = useState("")

  const hadleSubmit = (e) => {
    e.preventDefault()
    if (!title || !year || !price) return
    addMovie(title, year, price)
    setTitle("")
    setYear("")
    setPrice("")
  }

  return (
    <div className="admin-form">
        <h2>Enter a Movie:</h2>
        <form onSubmit={hadleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)}/>
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type="submit" >ADD</button>
        </form>
    </div>
  )
}
