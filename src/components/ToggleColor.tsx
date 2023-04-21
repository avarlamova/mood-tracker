import { useContext } from "react";
import { ReactComponent as ActiveSwitch } from "../assets/ActiveSwitch.svg";
import { ReactComponent as InactiveSwitch } from "../assets/InactiveSwitch.svg";
import { StatisticsContext } from "../contexts/StatisticsContext";

import "./ToggleColor.scss";

const ToggleColor = () => {
  const { isColorActive, toggleColor } = useContext(StatisticsContext);

  return (
    <div className="switch-btn">
      {isColorActive === "active" ? (
        <>
          <p>Disable colors </p>
          <ActiveSwitch onClick={toggleColor} />
        </>
      ) : (
        <>
          <p>Enable colors</p>
          <InactiveSwitch onClick={toggleColor} />
        </>
      )}
    </div>
  );
};

export default ToggleColor;
