import React, { useContext } from "react";
import { ReactComponent as ActiveSwitch } from "../assets/ActiveSwitch.svg";
import { ReactComponent as InactiveSwitch } from "../assets/InactiveSwitch.svg";

import { DaysContext } from "../contexts/DaysContext";
import "./ToggleStatistics.scss";

const ToggleStatistics = () => {
  const { isStatisticsActive, toggleStatistics } = useContext(DaysContext);
  return (
    <div className="switch">
      {isStatisticsActive ? (
        <>
          <p>Disable colored calendar </p>
          <ActiveSwitch onClick={toggleStatistics} />
        </>
      ) : (
        <>
          <p>Enable colored calendar</p>
          <InactiveSwitch onClick={toggleStatistics} />
        </>
      )}
    </div>
  );
};

export default ToggleStatistics;
