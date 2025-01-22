import ToggleSeatButton from "./ToggleSeatButton"

const SelectSeat = ( {count, subtract} ) => {
    return(
        <section>
            <div className="container">

                <div className="screen"></div>

                <div className="row">
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                </div>
                <div className="row">
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                </div>
                <div className="row">
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
                <div className="row">
                <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                </div>
                <div className="row">
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                </div>
                <div className="row">
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <ToggleSeatButton count={count} subtract={subtract}/>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <ToggleSeatButton count={count} subtract={subtract}/>

                </div>

            </div>
  
        </section>
    )
  }
  
  export default SelectSeat