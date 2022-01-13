import "./App.css";
import Year from "./components/year.js";
import EditWindow from "./components/editwindow.js";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    showEditWindow: false,
  };

  render() {
    const { showEditWindow } = this.state;

    return (
      <div>
        <Year />
        {showEditWindow ? <EditWindow /> : ""}
      </div>
    );
  }
}
