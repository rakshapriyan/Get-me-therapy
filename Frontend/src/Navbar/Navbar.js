import React from 'react';
import './navbar.css'; // Import your CSS file for styling
import {AiFillHome} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {BsFillCalendar2WeekFill} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="appointee.png" width="150px" /></a>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/"><AiFillHome size={20} id="hom-icon" />Home</Link></li>
          <li><Link to="/slots"><SlCalender size={20} id="hom-icon"/>Free slots</Link></li>
          <li><Link to="/booking"><BsFillCalendar2WeekFill size={20} id="hom-icon"/>Booking</Link></li>
          <li><Link to="/profile"><BsPersonCircle size={20} id="hom-icon"/>Profile</Link></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
