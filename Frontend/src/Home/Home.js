import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import './home.css';
import Footer from '../Footer/Footer';

const imageUrls = [
    'https://media.istockphoto.com/id/1394627722/photo/booking-meeting-calendar-appointment.webp?b=1&s=170667a&w=0&k=20&c=XiGLsek4tpXeekYjJ98FSuLTrTux65X9n4AFZXC8IuY=',
    'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    'https://7116861.fs1.hubspotusercontent-na1.net/hubfs/7116861/take-control-of-your-time-slot-booking-system-with-oncehubs-meeting-journey-builder.png',
    // Add more image URLs here
  ];

export default function Home() {
    
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000); 
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    
    <div>
        <div>
            <Navbar />
        </div>
        <div>
        <img src={imageUrls[currentIndex]} id="child-img" alt={`Child ${currentIndex}`} />
      </div>
      <div>
        <h2 id="about">About us</h2>
        <br /><br /><br />
        <div>
          <img src="https://images.ctfassets.net/k0lk9kiuza3o/pBXZMSdR0GVDnXM9rtrRl/ef3a3254653c4628576e93318925a7eb/Calendly_AddSchedulingForm_BlogHeader_1920x1080.png?w=1920&h=1080&q=85&fm=png"  id="hom-img2"/>
        </div>
        <div id="app-name">
          <br />
       Appointee is our premier appointment scheduling solution, designed with <br />a user-centric approach to simplify the booking process for businesses and <br />individuals alike. Our mission is to empower you with an innovative, <br />customizable, and reliable tool that streamlines your scheduling needs. With a<br /> commitment to cutting-edge technology and unwavering customer support,<br /> we offer a platform that adapts to your unique requirements, ensuring a<br /> hassle-free experience. Join the Appointee community today to reclaim your <br />time, enhance customer relationships, and boost productivity, as we redefine <br />the future of appointment management. Thank you for choosing us <br />as your trusted scheduling partner.Join the ever-growing Appointee community<br /> and bid farewell to appointment booking headaches. Reclaim your valuable <br />time, strengthen your customer relationships, and supercharge your<br /> productivity.
        </div>
      </div>
      <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> 
      <div>
        <h2 id="about">The pillars</h2>
        <div id="whole-card">
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFq8nWoHXomErH8YHsTe8lWmIpsYe5PntJ4-Ip5rRP1PXMv3u6aWkvJSPzy3lgwWWuuU&usqp=CAU" id="card1-img"/>
          </div>
          <div id="consul-but"><div id="consul-tex">Consultant</div></div>
        </div>
        <div id="whole-card2">
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFq8nWoHXomErH8YHsTe8lWmIpsYe5PntJ4-Ip5rRP1PXMv3u6aWkvJSPzy3lgwWWuuU&usqp=CAU" id="card1-img"/>
          </div>
          <div id="consul-but2"><div id="consul-tex2">User</div></div>
        </div>
      </div>
      <br /><br />
      <div>
        <Footer/>
      </div>
    </div>
  )
}
