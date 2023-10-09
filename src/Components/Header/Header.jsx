
import SeatLayout from '../SeatLayout/SeatLayout';
import { useState } from "react"
import { PiArmchairLight } from "react-icons/pi"
import './Header.css';

function Header() {
  const [ticketType, setTicketType] = useState('');
  const [quanityOfTicker, setQuantityOfTicker] = useState('')

  const handleTicket = (event) => {
    setTicketType(event.target.value);
  }

  const handleQuality = (event) => {
    setQuantityOfTicker(event.target.value)
  }

  return (
    <div className='main_container'>
      <div className='main_container_inner'>
        <h1>Book My Seat</h1>
        <div className="App">
          <div className='left'>
            <div className='dropdown'>

              <label style={{fontWeight:600}} htmlFor="tickettype" >Ticket Type:</label>
              <select style={{borderRadius:'10px'}} id="tickettype" value={ticketType} onChange={handleTicket}>
              <option value="">Ticket Type</option>
                <option  value="Standard">Standard</option>
                <option value="Premium">Premium[A,B]</option>
              </select>

              <label style={{fontWeight:600}}  htmlFor="qty" >Quantity:</label>
              <select style={{borderRadius:'10px'}} id="qty" value={quanityOfTicker} onChange={handleQuality}>
                <option value="">Qnty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

              </select>
            </div>
            <SeatLayout type={ticketType} quanityOfTicker={quanityOfTicker} />

          </div>
          <div className='right'>
            <div>
              <h3>Key to Seat Layout:</h3>
              <ul>
                <li>
                  <PiArmchairLight className='available seat' style={{width:"35px",height:"35px"}} />
                  <p>Available</p></li>

                <li>
                  <PiArmchairLight className='unavailable size' />
                  <p>Unavailable</p></li>

                <li>
                  <PiArmchairLight className='yourselection size' />
                  <p>Your Selection</p></li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Header;
