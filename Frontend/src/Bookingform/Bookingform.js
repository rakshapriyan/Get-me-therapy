// import React from 'react'

// export default function Bookingform() {
//   return (
//     <div>
//         <div>
//             <input type="text" placeholder="name" />
//             <input type="number" placeholder="Mobile" />
//             <input type="date" placeholder="Enter " />
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bookingform.css';
import Navbar from '../Navbar/Navbar';

export default function BookingForm() {
  // Define the disabled dates (in Date objects)
  const disabledDates = [new Date('2023-09-15'), new Date('2023-09-16'), new Date('2023-09-20')];

  // Initialize state for the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to check if a date is disabled
  const isDateDisabled = (date) => {
    // Use setHours(0,0,0,0) to ignore time components
    return disabledDates.some(disabledDate => {
      return date.setHours(0,0,0,0) === disabledDate.setHours(0,0,0,0);
    });
  };

  return (
    <div>
        
        <div>
            <Navbar />
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzisCaQVBcIhhAmor-SZswR2ISrLXzF8YPhp5YhskPp9RCTe3TIKMWH7C1J_9MkEwMyeE&usqp=CAU" id="book-img" />
        </div>
      <div id="book-box">
        <h1><center>Book your slot</center></h1>
        <div id="align">
        <label>Enter your Name</label><br /><br />
        <input type="text"  id="book-name" /><br /><br />
        <label>Enter your Mobile</label><br /><br />
        <input type="number"  id="book-name"/><br /><br />
        <label>Select your slot</label><br /><br />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd" // Set the desired date format
          filterDate={isDateDisabled} // Use the filterDate prop to disable specific dates
          id="book-name"
        /><br /><br />
        </div>
        <button type="submit" id="book-but">Book</button>
      </div>
    </div>
  );
}
