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

  handleClick(e) {
    let id = e.target.id; // day id
    console.log(id);
  }

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

    // detect today

    // initialDays.map((el) => {
    //   let dayOfWeek = new Date(el + "-" + month + "-2022").getDay();
    //   if (dayOfWeek % 6 === 0)
    //     this.setState(({ computedStyle }) => (computedStyle += "weekDay"));
    //   return el;
    // });

    return (
      <div className="month-container">
        {initialDays.map((day, index) => (
          <div
            onClick={this.handleClick}
            id={"2022-" + month + "-" + (day > 9 ? day : "0" + day)}
            key={index}
            className={"month-item " + this.state.computedStyle}
            //weekDay={new Date(day + "-" + month + "-2022").getDay()}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }
}
