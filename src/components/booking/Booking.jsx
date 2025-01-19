import Header from "../hero/Header"
import SelectMovie from "../hero/SelectMovie"
import SelectSeat from "../hero/SelectSeat"
import CalculateTotal from "../hero/CalculateTotal"
import Footer from "../hero/Footer"

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