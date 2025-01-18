import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
            <Link to="/movieseatbooking/createguest" className="btn btn-primary">Book</Link>
        </footer>
    )
  }
  
  export default Footer