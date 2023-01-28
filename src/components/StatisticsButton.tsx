import React, { useContext } from "react";
import StatisticsContext from "../contexts/StatisticsContext";

const StatisticsButton = () => {
  const { toggleStatistics } = useContext(StatisticsContext);

  return <div onClick={toggleStatistics}>Show statistics</div>;
};

export default StatisticsButton;
