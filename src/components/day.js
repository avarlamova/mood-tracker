import React, { Component } from "react";
import moment from "moment";

import "./day.css";

export default class Day extends Component {
  state = {
    daysCount: moment("2022-" + this.props.month, "YYYY-MM").daysInMonth(),
    selectedDays: [],
  };

  render() {
    let { month } = this.props;
    if (month < 10) month = "0" + month;

    const initialDays = Array(32)
      .fill()
      .map((x, i) => i)
      .filter((i) => i > 0);

    return (
      <div className="month-container">
        {initialDays.map((day, index) => (
          <div
            id={"2022-" + month + "-" + (day > 9 ? day : "0" + day)}
            key={index}
            className="month-item"
          >
            {day}
          </div>
        ))}
      </div>
    );
  }
}
