import { useContext } from "react";
import { ReactComponent as ActiveSwitch } from "../assets/ActiveSwitch.svg";
import { ReactComponent as InactiveSwitch } from "../assets/InactiveSwitch.svg";
import StatisticsContext from "../contexts/StatisticsContext";

import "./ToggleColor.scss";

const ToggleColor = () => {
  const { isColorActive, toggleColor } = useContext(StatisticsContext);

  return (
    <div className="switch">
      {isColorActive ? (
        <>
          <p>Disable colored calendar </p>
          <ActiveSwitch onClick={toggleColor} />
        </>
      ) : (
        <>
          <p>Enable colored calendar</p>
          <InactiveSwitch onClick={toggleColor} />
        </>
      )}
    </div>
  );
};

export default ToggleColor;
