import React, { useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./Statistics.scss";
import { UserDay } from "../contexts/DaysContext";
import { StatisticsContext } from "../contexts/StatisticsContext";
import { useMoodsContext } from "../contexts/MoodsContext";

const Statistics = () => {
  const { userDays } = useContext(DaysContext);
  const { toggleStatistics } = useContext(StatisticsContext);
  const { moods } = useMoodsContext();

  const renderedStatistics = moods.map((mood) => {
    const count = userDays.filter(
      (day: UserDay) => day.mood === mood.value
    ).length;
    const renderedParagraph = mood.value + " " + mood.emoji + " days: " + count;
    return <li key={mood.id}>{renderedParagraph}</li>;
  });

  return (
    <div className="content">
      <ul>{renderedStatistics}</ul>
      <div className="actions">
        <button className="actions btn-cancel" onClick={toggleStatistics}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Statistics;
