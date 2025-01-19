import React from 'react'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const EditForm = ({ movie, updateMovie }) => {
    
      const [title, setTitle] = useState("")
      const [year, setYear] = useState("")
      const [price, setPrice] = useState("")

      const hadleSubmit = (e) => {
        e.preventDefault()
        if (!title || !year || !price) return
        updateMovie(movie.id, title, year, price)
      }

    return(
        <>
                <Popup trigger= {<button className="edit">Edit</button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className="admin-form">
                                    <h2>Edit {movie.title}:</h2>
                                    <form onSubmit={hadleSubmit}>
                                        <input type="text" placeholder={movie.title} value={title} onChange={(e) => setTitle(e.target.value)}/>
                                        <input type="text" placeholder={movie.year} value={year} onChange={(e) => setYear(e.target.value)}/>
                                        <input type="text" placeholder={movie.price} value={price} onChange={(e) => setPrice(e.target.value)}/>
                                        <button type="submit" >Update</button>
                                        <button className="remove" onClick= {() => close()}> Close </button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </Popup>
        </>
    )
  }
  
  export default EditForm