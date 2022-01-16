import React, { Component } from "react";
import moment from "moment";

import "./day.css";

export default class Day extends Component {
  state = {
    daysCount: moment("2022-" + this.props.month, "YYYY-MM").daysInMonth(),
    computedStyle: "day-default",
    today: moment().format("YYYY-MM-DD"),
    id: "2022-" + this.props.month + "-",
  };

  // handleDayClick(e) {
  //   let id = e.target.id; // day id

  //   console.log(id);
  // }

  render() {
    let { month } = this.props;
    if (month < 10) month = "0" + month;

    const initialDays = Array(31)
      .fill()
      .map((el, i) => {
        return i;
      })
      .filter((i) => i > 0);

    initialDays.unshift(month);

    return (
      <div className="month-container">
        {initialDays.map((day, index) => (
          <div
            onClick={() => {
              this.props.handleDayClick();
            }}
            id={"2022-" + month + "-" + (day > 9 ? day : "0" + day)}
            key={index}
            className={"month-item " + this.state.computedStyle}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }
}
