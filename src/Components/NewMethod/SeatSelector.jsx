import React, { useState } from 'react';
import Seat from './Seat';

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) {
      alert('This seat is already booked!');
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookSeats = () => {
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h2>Seat Selector</h2>
      <div>
        <Seat seatId="" onClick={handleSeatClick} selected={selectedSeats.includes('')} booked={bookedSeats.includes('')} />
      </div>
      <button onClick={handleBookSeats} disabled={selectedSeats.length === 0 || bookedSeats.some(seat => selectedSeats.includes(seat))}>
        Book Selected Seats
      </button>
      <div>
        <strong>Selected Seats: </strong>
        {selectedSeats.map((seat) => `${seat} `)}
      </div>
    </div>
  );
};

export default SeatSelector;
