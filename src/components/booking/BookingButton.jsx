import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../admin/Admin.css'

const BookingButton = () => {
    
    return(
        <>
                <Popup trigger= {<button className="btn btn-primary">Book</button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div>
                                    <h5>Please inform your name and phone number:</h5>
                                    <form>
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Phone" />
                                        <button type="submit" >Send</button>
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
  
  export default BookingButton