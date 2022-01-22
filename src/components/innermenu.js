import React, { Component } from "react";

export default class InnerMenu extends Component {
  render() {
    const moods = ["Happy", "Sad", "Disappointed", "In love"];
    return (
      <div>
        <ul>
          {moods.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}
