import React, { useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./Statistics.scss";
import { UserDay } from "../contexts/DaysContext";
import StatisticsContext from "../contexts/StatisticsContext";

const Statistics = () => {
  const { userDays } = useContext(DaysContext);
  const { toggleStatistics } = useContext(StatisticsContext);

  //   console.log(userDays);

  const happyDaysCount = userDays.filter(
    (day: UserDay) => day.mood === "Happy"
  ).length;

  const mehDaysCount = userDays.filter(
    (day: UserDay) => day.mood === "Meh"
  ).length;

  return (
    <div className="statistics-window">
      <div className="content">
        <p> Happy days: {happyDaysCount} </p>
        <p> Meh days: {mehDaysCount} </p>
        <div className="actions">
          <button className="actions btn-cancel" onClick={toggleStatistics}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
