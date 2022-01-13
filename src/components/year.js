import React, { Component } from "react";
import Month from "./month.js";

export default class Year extends Component {
  render() {
    const { today } = this.props;

    return (
      <div>
        year 2022 <Month today={today} />
      </div>
    );
  }
}
