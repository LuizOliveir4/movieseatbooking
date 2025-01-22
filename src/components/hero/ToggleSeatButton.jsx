import React, { useState } from 'react'

const ToggleSeatButton = ({count, subtract}) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
      setIsActive(!isActive)
      count()
      if(isActive){
      subtract()  
      }
    }
  
  
    return (
        <div onClick={handleClick} className={isActive ? 'seat occupied' : 'seat'}>
        </div>
    )
  }
  
  export default ToggleSeatButton