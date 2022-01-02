import React, { Component } from "react";
import Day from "./day.js";
import "./month.css";

export default class Month extends Component {
  render() {
    const months = Array(13)
      .fill()
      .map((x, i) => i)
      .filter((i) => i > 0);

    // const year = new Date().getFullYear();

    return (
      <div>
        <div className="year-container">
          {months.map((month, index) => (
            <div key={index} className="year-item">
              <div>
                <Day month={month} />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
