import React, { Component } from "react";
import Month from "./month.js";

export default class Year extends Component {
  render() {
    return (
      <div>
        year 2022 <Month />
      </div>
    );
  }
}
