import React from 'react';
import style from './Calendar.module.sass';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';

 function Calendar () {
  return (
    <div className={style.calendarWrapper}>
      <CurrentDay />
      <CalendarBody /> 
    </div>
  )
}

export default Calendar;