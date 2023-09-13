import React from 'react'
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BiSolidPhoneCall} from 'react-icons/bi';

export default function Footer() {
  return (
    <div id="whole-box">
        <div id="foot-head">
            Appointee
        </div>
        <div id="nav-lis">
            <ul>
                <li id="list">Home</li>
                <li id="list">Booking</li>
                <li id="list">Profile</li>
                

            </ul>
        </div>
            <div id="follow">Follow us on</div>
        <div id="nav-icons">
            <ul id="flex">
                <li id="ico-list"><BsFacebook size={30} color="white"/></li>
                <li id="ico-list"><BsInstagram size={30} color="white"/></li>
                <li id="ico-list"><BsTwitter size={30} color="white"/></li>
            </ul>
        </div>
        <div id="sub">
           Subscribe
        </div>
        <div id="in-box">
            <input type="text" placeholder="Enter you e-mail" id="in-text"></input>
        </div>
        <div id="but-div">
            <button id="sub-but">Subscribe</button>
        </div>
        <div id="call">
        <BiSolidPhoneCall  size={30} id="solid"/>
            call us 
        </div>
        <div id="phone">
            +91 1234567890
        </div>
        <div id="hr-line">

        </div>
        <div id="copy">
        Appointee - Made  by  Rakshapriyan <br />
         @ All copyrights reserved
        </div>
    </div>
  )
}
