import "./App.css";
import Year from "./components/year.js";
import EditWindow from "./components/editwindow.js";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    editWindowIsShown: false,
  };

  showEditWindow() {
    this.setState({ editWindowIsShown: true });
  }

  render() {
    const { editWindowIsShown } = this.state;

    return (
      <div>
        <Year
          openEditWindow={() => {
            this.showEditWindow();
          }}
        />
        {editWindowIsShown ? <EditWindow /> : ""}
      </div>
    );
  }
}
