import React, { Component } from "react";
import Month from "./month.js";

export default class Year extends Component {
  openEditWindow() {
    console.log("year");
  }
  render() {
    const { today } = this.props;

    return (
      <div>
        year 2022
        <Month today={today} openEditWindow={this.props.openEditWindow} />
      </div>
    );
  }
}
