import React, { useState } from "react";
import moment from "moment";

import "./day.css";

const Day = (month:number) => {
  // state = {
  //   daysCount: moment("2022-" + this.props.month, "YYYY-MM").daysInMonth(),
  //   computedStyle: "day-default",
  //   today: moment().format("YYYY-MM-DD"),
  //   id: "2022-" + this.props.month + "-",
  // };

  // handleDayClick(e) {
  //   let id = e.target.id; // day id

  //   console.log(id);
  // }

    // if (month < 10) month = "0" + month;

    const initialDays = Array(31)
      .fill(0)
      .map((el, i) => {
        return i;
      })
      .filter((i) => i > 0);

    initialDays.unshift(month);

    return (
      <div className="month-container">
        {initialDays.map((day, index) => (
          <div
            // onClick={() => {
            //   this.props.handleDayClick();
            // }}
            id={"2022-" + month + "-" + (day > 9 ? day : "0" + day)}
            key={index}
            className={index === 0 ? "month-name" : "month-item"}
          >
            {day}
          </div>
        ))}
      </div>
    );
}

export default Day