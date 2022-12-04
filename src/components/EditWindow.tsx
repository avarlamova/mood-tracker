import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import InnerMenu from "./innermenu.js";

import "./editwindow.scss";

export const EditWindow = () => {
  const saveChanges = () => {
    console.log("saveChanges")
  }

  const closeWindow = () => {
    console.log("closeWindow")
  }
    return (
      <div className="modal" id="modal">
        <div className="content">
          <h2> How are you today? </h2>
          <InnerMenu />
          <div className="actions">
            <button className="actions btn-save" onClick={saveChanges}>
              Save changes
            </button>
            <button className="actions btn-cancel" onClick={closeWindow}>
              close
            </button>
          </div>
        </div>
      </div>
    );
}

// EditWindow.propTypes = {
//   message: PropTypes.string,
// };

export default EditWindow
