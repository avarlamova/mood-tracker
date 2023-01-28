import React, { useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./Statistics.scss";
import { UserDay } from "../contexts/DaysContext";
import StatisticsContext from "../contexts/StatisticsContext";
import { useMoodsContext } from "../contexts/MoodsContext";

const Statistics = () => {
  const { userDays } = useContext(DaysContext);
  const { toggleStatistics } = useContext(StatisticsContext);
  const { moods } = useMoodsContext();

  const renderedStatistics = moods.map((mood) => {
    const count = userDays.filter(
      (day: UserDay) => day.mood === mood.value
    ).length;
    const renderedParagraph = mood.value + " days: " + count;
    return <p key={mood.id}>{renderedParagraph}</p>;
  });

  return (
    <div className="statistics-window">
      <div className="content">
        {renderedStatistics}
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
