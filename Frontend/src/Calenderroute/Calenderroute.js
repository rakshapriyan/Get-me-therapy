import React from 'react'
import MyCalendar from '../calendar/GoogleCalendar'
import BookingForm from '../Bookingform/Bookingform'
import Profile from '../Profile/Profile'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
export default function Calenderroute() {
  return (
    <div>
         <Router>  
    
    <Routes>
  {/* <h1>React Router Example</h1>   */}
   <Route exact path="/" element={<Home />} />  
  <Route path="/slots" element={<MyCalendar />} />
  <Route path="/booking" element={<BookingForm />} />
  <Route path="/profile" element={<Profile />} />
 
    
  </Routes>  
  
</Router> 
    </div>
  )
}
