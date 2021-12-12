import React, { Component } from "react";

export default class Day extends Component {
  state = {
    counter: 1,
    days: [],
  };

  initializeDays = () => {
    this.setState(() => {
      let i = 1;
      for (i; i < 32; i++) {
        this.state.days.push(i);
      }
    });
  };

  сomponentDiDMount() {
    console.log(this.state.days);

    this.initializeDays();
    console.log(this.state.days);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.days.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
    );
  }
}
