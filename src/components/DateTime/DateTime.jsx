import React from 'react'
import './style.css'
export const DateTime = () => {
  return (
    <div id='time-container'>
        <div id="date">
            <img src={process.env.PUBLIC_URL + "/assets/Select_date-01.svg"} alt="" />
            05 Aug 2023
        </div>
        <div id="time">
          <img src={process.env.PUBLIC_URL + "/assets/Set_time-01.svg"} alt="" />
            10:00 Pm-12:00 Pm
        </div>
    </div>
  )
}