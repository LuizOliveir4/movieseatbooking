import { Link } from "react-router-dom"
import BookingButton from "../booking/BookingButton"

const Footer = ({total}) => {
    return(
        <footer>
            <BookingButton total={total}/>
        </footer>
    )
  }
  
  export default Footer