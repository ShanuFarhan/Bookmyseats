import React,{useState} from 'react';

const Seat = ({ seatId, onClick, selected, booked }) => {
    const [seats, setSeats] = useState([
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      ]);
  
    // <div
    //   onClick={() => onClick(seatId)}
    //   style={{
    //     backgroundColor: booked ? 'grey' : selected ? 'green' : 'white',
    //     width: '40px',
    //     height: '40px',
    //     border:'solid 1px green',
    //     margin: '5px',
    //     display: 'inline-block',
    //     cursor: booked ? 'not-allowed' : 'pointer',
    //   }}
    // >
     
    // </div>
 
    return seats.map((row, seatId) => {
        return (
          <div
            style={{
            display: "flex",
            }}
          >
            <div
              style={{
                marginTop:'10px',
                marginLeft: "200px",
                width: "40px",
              }}
            >
              {String.fromCharCode(65 + seatId)}
            </div>
            {row.map((seat) => (
              <>
                {seat != 0 ? (
                  <div  onClick={() => onClick(seatId)} 
                  style={{width: "1rem",height:'20px',
                  backgroundColor: booked ? 'grey' : selected ? 'green' : 'white',
                      border:'solid 1px green',
                      margin: '5px',
                      display: 'inline-block',
                      cursor: booked ? 'not-allowed' : 'pointer', }}></div>
                ) : (
                  <span style={{ marginRight: "1rem" }}></span>
                )}
              </>
            ))}
           
          </div>
    
        );
        
      });
      
    
    }

export default Seat;
