import { useState, useEffect } from 'react'
import { loadMovies } from '../../data/MoviesContext'
import Header from "./Header"
import SelectMovie from "./SelectMovie"
import ShowCase from "./ShowCase"
import SelectSeat from "./SelectSeat"
import ShowTotal from "./ShowTotal"
import Footer from "./Footer"

const Hero = ( ) => {
    
      const [movies, setMovies] = useState([])
      const [numberOfSeats, setNumberOfSeats] = useState(0)
      const [price, setPrice] = useState(0)
      const [total, setTotal] = useState(0)
    
      useEffect(() =>{
        const fetchData = async()=>{
          const result = await loadMovies()
          setMovies(result)
        }
        fetchData()
      }, [])
    
      const hadleChange = (e) => {
        const price = {price: e.target.value}.price
        console.log(price)
        setPrice(price)
      }

      const count = () => {
        const newNumberOfSeats = numberOfSeats + 1;
        console.log(newNumberOfSeats)
        setNumberOfSeats(newNumberOfSeats)
        multiplies()
      }

      const subtract = () => {
        const newNumberOfSeats = numberOfSeats - 1;
        console.log(newNumberOfSeats)
        setNumberOfSeats(newNumberOfSeats)
        multiplies()
      }

      const multiplies = () => {
        const total = numberOfSeats * price
        console.log(total)
        setTotal(total)
      }

    return(
        <>
            <Header/>
            <SelectMovie hadleChange={hadleChange} movies={movies}/>
            <ShowCase/>
            <SelectSeat count={count} subtract={subtract}/>
            <ShowTotal numberOfSeats={numberOfSeats} total={total}/>
            <Footer/>
        </>
    )
  }
  
  export default Hero