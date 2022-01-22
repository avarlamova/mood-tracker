import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import InnerMenu from "./innermenu.js";

import "./editwindow.scss";

export default class EditWindow extends Component {
  closeWindow = () => {
    this.props.handleClose();
  };
  render() {
    return (
      <div className="modal" id="modal">
        <div className="content">
          <h2> How are you today? </h2>
          <InnerMenu />
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={this.closeWindow}>
            close
          </button>
          <button onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>
    );
  }
}

EditWindow.propTypes = {
  message: PropTypes.string,
};
