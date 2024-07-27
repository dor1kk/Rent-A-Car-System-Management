// src/components/CalendarComponent.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { cars } from '../constants'; // Update path as needed

const CalendarComponent = () => {
  // Generate events from car availability
  const events = cars.flatMap(car => car.availability.map(date => ({
    title: car.title,
    start: new Date(date),
    end: new Date(date),
    backgroundColor: '#ffeb3b',
    borderColor: '#333'
  })));

  return (
    <div className="bg-white rounded-lg shadow-lg  px-32 py-12 mb-6">
      <div className="">
        <FullCalendar
          
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={(eventInfo) => (
            <div className="text-xs font-bold">
              {eventInfo.event.title}
            </div>
          )}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          style={{ height: '500px' }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
