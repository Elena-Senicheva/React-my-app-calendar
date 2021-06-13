import React from 'react'
import style from './Day.module.sass'
import { isToday, isThisMonth, format } from 'date-fns'
import cx from 'classnames'

function Day ({ dayNumber }) {
  return (
    <div
      className={cx(
        style.day,
        isThisMonth(dayNumber) ? style.thisMonthDay : style.otherMonthDay,
        {
          [style.today]: isToday(dayNumber)
        }
      )}
    >
      {format(dayNumber, 'dd')}
    </div>
  )
}

export default Day
