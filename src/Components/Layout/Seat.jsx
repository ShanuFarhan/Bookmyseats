

// const Seat = ({ seatNumber,isSelected, onClick }) => {

//   // function handleClick=()=>{

//   // }
//     return (
//       <div
//       onClick={() => onClick(seatNumber)}
//         style={{
//           backgroundColor: isSelected ? 'green' : 'white',
//           margin: '5px',
//           width: '20px',
//           height: '20px',
//           border: 'solid 1px green',
//           cursor: 'pointer',
//         }}
//       >
//       </div>
//     );
//   };
//   export default Seat
import React, { useState } from 'react';

const Seat = ({ seatNumber, isSelected,isBooked, onClick }) => {
  return (
    <div
      onClick={() => onClick(seatNumber)}
      style={{
        backgroundColor: isSelected ? 'green' : 'white',
        margin: '5px',
        width: '20px',
        border: 'solid 1px green',
        height: '20px',
        cursor: 'pointer',
      }}
    >
      
    </div>
  );
};

const SeatLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const generateSeats = (rowCount, seatsPerRow) => {
    const seats = [];
    for (let i = 1; i <= rowCount; i++) {
      for (let j = 1; j <= seatsPerRow; j++) {
        const seatNumber = `${String.fromCharCode(64 + i)}${j}`;
        seats.push(
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            isSelected={selectedSeats.includes(seatNumber)}
            onClick={handleSeatClick}
          />
        );
      }
    }
    return seats;
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {generateSeats(1, 1)} {/* 5 rows, 10 seats per row */}
      </div>
    </div>
  );
};

export default SeatLayout;
