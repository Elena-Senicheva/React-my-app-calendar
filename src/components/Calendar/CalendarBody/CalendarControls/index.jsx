import React from 'react'
import style from './CalendarControls.module.sass'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export default function CalendarControls ({ openPrevMonth, openNextMonth }) {
  return (
    <div className={style.arrow}>
      <FaArrowAltCircleLeft
        className={style.leftarrow}
        onClick={openPrevMonth}
      />
      <FaArrowAltCircleRight
        className={style.rightarrow}
        onClick={openNextMonth}
      />
    </div>
  )
}
