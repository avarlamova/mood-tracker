import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type StatisticsContextProps = {
  isStatisticsActive: boolean;
  toggleStatistics: () => void;
  isColorActive: boolean;
  toggleColor: () => void;
};

export const StatisticsContext = createContext<StatisticsContextProps>({
  isStatisticsActive: false,
  toggleStatistics: () => {},
  isColorActive: false,
  toggleColor: () => {},
});

export const StatisticsProvider = ({ children }: any) => {
  const [isStatisticsActive, setStatisticsActive] = useState<boolean>(false);

  const toggleStatistics = () => {
    // console.log(22, isStatisticsActive);
    setStatisticsActive(!isStatisticsActive);
  };

  const [isColorActive, setColorActive] = useLocalStorage("color", false);
  const toggleColor = () => {
    setColorActive(!isColorActive);
  };

  return (
    <StatisticsContext.Provider
      value={{
        isStatisticsActive,
        toggleStatistics,
        isColorActive,
        toggleColor,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};
export const useStatisticsContext = () => useContext(StatisticsContext);
