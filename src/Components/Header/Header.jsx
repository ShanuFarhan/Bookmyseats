import React, { useState } from 'react'
import "./Header.css"
const Header = () => {
    const [selectedTicket, setSelectedTicket] = useState(''); 
    const [NumberofTickets,setNumberofTickets]=useState('')
    const handleTicketChange = (event) => {
      setSelectedTicket(event.target.value);
    };
    const handleChange=(e)=>{
        setNumberofTickets(e.target.value)
    }
  return (
    <div>
      <h2>Book My Seat</h2>
      <select id="ticketSelect" value={selectedTicket} onChange={handleTicketChange}>
        <option value="">Ticket type</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
      </select>
      <input value={NumberofTickets} onChange={handleChange} 
      type="number" 
      placeholder="Number of Tickets"/>
      {selectedTicket && (
        <div>
          <h3>Selected Ticket: {selectedTicket}</h3>
        </div>
      )}
      {
          NumberofTickets &&(
              <div>
                  <h3>Number of Tickets: {NumberofTickets}</h3>
              </div>
          )
      }
    </div>
  )
}

export default Header
