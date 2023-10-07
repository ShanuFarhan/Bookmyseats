import React, { useState } from 'react'
import "./Footer.css"
import Seat from '../Layout/Seat'
const Footer = ({ onBookSeats }) => {
 
  return (
    <div>
      <div className="categories">
        <div className="available cs">
          <h3>Available</h3>
          <Seat />
        </div>
        <div className="notavailable cs">
          <h3>Unavailable</h3>
          <div
            style={{

              margin: '5px',
              width: '20px',
              backgroundColor: 'grey',
              height: '20px',
              border: 'solid 1px green',
              cursor: 'pointer',
            }}
          >
          </div>
        </div>
        <div className="notavailable cs">
          <h3>Your Selection</h3>
          <div
            style={{

              margin: '5px',
              width: '20px',
              backgroundColor: 'green',
              height: '20px',
              border: 'solid 1px green',
              cursor: 'pointer',
            }}
          >
          </div>
        </div>
      </div>
      <button onClick={onBookSeats} >Proceed</button>
    </div>
  )
}

export default Footer
