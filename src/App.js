import "./App.css";
// import Year from "./components/year.js";
import EditWindow from "./components/EditWindow";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    editWindowIsShown: false,
    message: "Sup guys",
  };

  showEditWindow() {
    this.setState({ editWindowIsShown: true });
  }

  handleClose = () => {
    this.setState({ editWindowIsShown: false });
  };

  render() {
    const { editWindowIsShown, message } = this.state;

    return (
      <div>
        {editWindowIsShown ? (
          <EditWindow message={message} handleClose={this.handleClose} />
        ) : (
          ""
        )}
        {/* <Year
          openEditWindow={() => {
            this.showEditWindow();
          }}
        /> */}
      </div>
    );
  }
}
