const ShowTotal = ({ numberOfSeats, total }) => {
    return(
        <>
            <p className="text">
            You have selected
            <span id="count"> {numberOfSeats} </span> seats for a price of $ <span id="total">{total}</span>
            </p>

        </>
    )
  }
  
  export default ShowTotal