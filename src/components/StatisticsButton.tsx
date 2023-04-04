import React, { useContext } from "react";
import { StatisticsContext } from "../contexts/StatisticsContext";
import "./StatisticsButton.scss";

const StatisticsButton = () => {
  const { toggleStatistics } = useContext(StatisticsContext);

  return (
    <button className="stat-btn" onClick={toggleStatistics}>
      Show statistics
    </button>
  );
};

export default StatisticsButton;
