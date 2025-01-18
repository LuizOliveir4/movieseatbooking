import Header from "./Header"
import SelectMovie from "./SelectMovie"
import SelectSeat from "./SelectSeat"
import CalculateTotal from "./CalculateTotal"
import Footer from "./Footer"

const Booking = () => {
    return(
        <>
            <Header/>
            <SelectMovie/>
            <SelectSeat/>
            <CalculateTotal/>
            <Footer/>
        </>
    )
  }
  
  export default Booking