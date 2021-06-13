import React, { useState } from 'react';
import style from './CalendarBody.module.sass';
import Month from './Month';
import { format, addMonths, subMonths } from 'date-fns';

 function CalendarBody () {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const monthName = format(currentDate, 'EEEE')
  // const currentYear = format(currentDate, 'yyyy')

  // const openPrevMonth = () =>
  //   setCurrentDate(currentDate => subMonths(currentDate, 1));

  // const openNextMonth = () =>
  //   setCurrentDate(currentDate => addMonths(currentDate, 1)); 

  return (
    <div className={style.calendarBodyWrapper}>
      <div className={style.monthHeader}>
        {monthName} {currentYear}
      </div>
      <Month />
    </div>
  )
}

export default CalendarBody;
