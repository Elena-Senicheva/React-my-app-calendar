import React from 'react';
import style from './Week.module.sass';
import { startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import Day from './Day';

 function Week ({ startDate, currentDate }) {
  const daysInWeekArray = eachDayOfInterval({
    start: startOfWeek(startDate),
    end: endOfWeek(startDate),
  });

  const daysArray = daysInWeekArray.map(currentDay => (
    <Day day={currentDay} currentMonthDate={currentDate} key={currentDay.toLocaleDateString()} />
  ));

  return <div className={style.dayWrapper}>{daysArray}</div>;
}

export default Week;