import React from 'react'
import { useState } from 'react'
import { Guest } from '../../data/Guest'
import SendGuest from './SendGuest'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../admin/Admin.css'

const BookingButton = () => {

      const [guests, setGuests] = useState([
        {
          Id: 1,
          Name: "The Lion King",
          Phone: "2019"
        },
        {
          Id: 2,
          Name: "Mowgli: Legend of the Jungle",
          Phone: "2018",
        },
        {
          Id: 3,
          Name: "Doctor Strange",
          Phone: "2016",
        },
        {
          Id: 4,
          Name: "John Wick",
          Phone: "2014",
        }
      ])
      
      const addGuest = (Name, Phone) => {
        const newGuest = new Guest(Math.floor(Math.random()*10000), Name, Phone)
        const newGuests = [... guests, newGuest]
      setGuests(newGuests)
      }
    
    return(
        <>
                <Popup trigger= {<button className="btn btn-primary">Book</button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div>
                                    <SendGuest addGuest={addGuest}/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
        </>
    )
  }
  
  export default BookingButton