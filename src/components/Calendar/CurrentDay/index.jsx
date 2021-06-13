import React from 'react';
import style from './CurrentDay.module.sass';
import { format } from 'date-fns';

function CurrentDay () {
  const today = new Date()
  const currentDay = format(today, 'dd')
  const dayName = format(today, 'EEEE')
  return (
    <div className={style.dayWrapper}>
      <div className={style.dayName}>{dayName}</div>
      <div className={style.dayNumber}>{currentDay}</div>
    </div>
  )
}

export default CurrentDay
