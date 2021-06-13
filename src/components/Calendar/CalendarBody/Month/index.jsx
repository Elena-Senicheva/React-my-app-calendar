import React, { useState } from 'react';
import CalendarHeader from '../CalendarHeader';
import style from './Month.module.sass';
import Week from '../Week';
import {startOfMonth, endOfMonth, eachWeekOfInterval } from 'date-fns';

function Month () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} currentDate={currentDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div>
      <CalendarHeader />
      <div className={style.weekWrapper}>{weeks}</div>
    </div>
  );
}

export default Month;