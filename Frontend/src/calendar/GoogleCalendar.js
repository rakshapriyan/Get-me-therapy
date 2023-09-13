
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import './calender.css'; // Assuming you have a custom CSS file for styling
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Navbar from '../Navbar/Navbar';

const localizer = momentLocalizer(moment);

const unavailableDates = [
  moment().add(2, 'days').toDate(),
  moment().add(5, 'days').toDate(),
  // Add more unavailable dates as needed
];

const isSameMonth = (date, start, end) =>
  moment(date).isSameOrAfter(start, 'month') && moment(date).isSameOrBefore(end, 'month');

const isToday = (date) => moment(date).isSame(new Date(), 'day');

const getDayBackgroundColor = (date, start, end) => {
  if (!isSameMonth(date, start, end)) {
    return '#FA8072'; // Change color for all upcoming and past months to red
  } else if (isToday(date)) {
    return '#b6e2ff'; // Change color for today to green
  } else if (unavailableDates.some((unavailableDate) => moment(unavailableDate).isSame(date, 'day'))) {
    return '#FA8072'; // Leave the red color for unavailable dates
  } else {
    return '#AFE1AF'; // Leave the green color for available dates
  }
};

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNext = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const handlePrev = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const handleToday = () => {
    setCurrentDate(moment()); // Set the current date to the current month
  };

  const dayStyleGetter = (date, start, end, isSelected) => ({
    style: { backgroundColor: getDayBackgroundColor(date, start, end) },
    onClick: () => {
      if (getDayBackgroundColor(date, start, end) === 'green') {
        // Open the booking form when clicking on a green block
        setSelectedDate(date);
      }
    },
  });

  const closeBookingForm = () => {
    setSelectedDate(null);
  };

  const CustomToolbar = (toolbar) => {
    const goToToday = () => {
      handleToday(); // Call the handleToday function to set the current date
      toolbar.onNavigate('TODAY');
    };

    const goToPrev = () => {
      handlePrev();
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      handleNext();
      toolbar.onNavigate('NEXT');
    };

    return (
      <div className="rbc-toolbar">
        <div className="rbc-btn-group">
          <button type="button" onClick={goToPrev}>Back</button>
        </div>
        <div className="rbc-btn-group" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <button type="button" onClick={goToToday}>Today</button>
        </div>
        <div className="rbc-btn-group">
          <button type="button" onClick={goToNext}>Next</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="calendar-container" style={{ height: '100vh', textAlign: 'center' }}>
        <h1>{currentDate.format('MMMM YYYY')}</h1>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          dayPropGetter={dayStyleGetter}
          style={{ height: '80%', margin: '0 auto' }}
          components={{
            toolbar: CustomToolbar,
          }}
          onView={() => {}}
          date={currentDate.toDate()}
          onNavigate={() => {}} // Add a dummy onNavigate handler
        />
      </div>
      {selectedDate && (
        {/* Include your BookingForm component here */}
      )}
    </div>
  );
};

export default MyCalendar;

