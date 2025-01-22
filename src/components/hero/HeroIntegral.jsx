import React from 'react'
import { loadMovies } from '../../data/MoviesContext'
import { ShowMovieOption } from './ShowMovieOption'
import { useState, useEffect } from 'react'
import ToggleSeatButton from "./ToggleSeatButton"
import Header from "./Header"
import Footer from "./Footer"

const Hero = ({numberOfSeats, price}) => {

    //SelectMovie
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

      //CalulateTotal

      

    return(
        <>
            <Header/>
      <section>
        {/* SelectMovie */}
              <div className="movie-container">
              <label htmlFor="movie">Pick a movie:</label>
                  <select name="movie" id="movie" onChange={hadleChange}>
                      {movies.map((movie) => (
                          <ShowMovieOption key={movie.id} movie={movie} />
                      ))}
                  </select>
              </div>

        {/* ShowCase */}

      <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
      </ul>

      </section>

    {/* SelectSeat */}

      <section>
            <div className="container">

                <div className="screen"></div>

                <div className="row">
                    <ToggleSeatButton id="1"/>
                    <ToggleSeatButton id="2"/>
                    <ToggleSeatButton id="3"/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                </div>
                <div className="row">
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                </div>
                <div className="row">
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
                <div className="row">
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                </div>
                <div className="row">
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                </div>
                <div className="row">
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <ToggleSeatButton/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton/>

                </div>

            </div>
  
        </section>

        {/* CalculateTotal */}

        <p className="text">
            You have selected
            <span id="count"> {numberOfSeats} </span> seats for a price of $<span id="total">{price}</span>
        </p>
            <Footer/>
        </>
    )
  }
  
  export default Hero