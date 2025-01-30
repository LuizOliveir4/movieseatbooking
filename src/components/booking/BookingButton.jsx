import React from 'react'
import { useState, useEffect } from 'react'
import { loadGuests } from '../../data/GuestContext'
import { sendGuestToServer } from '../../data/GuestContext'
import { Guest } from '../../data/Guest'
import SendGuest from './SendGuest'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../admin/Admin.css'

const BookingButton = ({total}) => {

    const [guests, setGuests] = useState([]);
  
    useEffect(() =>{
      const fetchData = async()=>{
        const result = await loadGuests()
        setGuests(result)
      }
      fetchData()
    }, [])
      
      const addGuest = (Name, Phone) => {
        const newGuest = new Guest(Math.floor(Math.random()*10000), Name, Phone)
        const newGuests = [... guests, newGuest]
      setGuests(newGuests)
      sendGuestToServer(newGuest)
      }
    
    return(
        <>
                <Popup trigger= {<button className="btn btn-primary">Book</button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div>
                                    <SendGuest addGuest={addGuest} total={total}/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
        </>
    )
  }
  
  export default BookingButton