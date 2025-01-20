import React from 'react'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const SendGuest = ({ addGuest }) => {
    
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const hadleSubmit = (e) => { 
    e.preventDefault()
    if (!name || !phone) return
    addGuest(name, phone)
  }

    return(
        <>

        <h5>Please inform your name and phone number:</h5>
        <form onSubmit={hadleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            
            <Popup trigger= {<button type="submit">Send</button>} modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <h5>Tank you {name}!</h5>
                                <h5>Chech your SMS box to see your tickets.</h5>
                                <button onClick= {() => location.reload()}> OK </button>    
                            </div>
                        )
                    }
            </Popup>

            <button className="remove" onClick= {() => close()}> Close </button>
        </form>
        </>
    )
  }
  
  export default SendGuest