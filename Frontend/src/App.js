import logo from './logo.svg';
import './App.css';

import MyCalendar from './calendar/GoogleCalendar';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Bookingform from './Bookingform/Bookingform';
import Calenderroute from './Calenderroute/Calenderroute';

function App() {
  return (
   <div>
    {/* <MyCalendar/> */}
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Login />
    {/* <Bookingform /> */}
    {/* <Registration /> */}
    <Calenderroute />
   </div>
  );
}

export default App;
