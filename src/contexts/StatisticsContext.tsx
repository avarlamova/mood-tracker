import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type StatisticsContextProps = {
  isStatisticsActive: boolean;
  toggleStatistics: () => void;
  isColorActive: string;
  toggleColor: () => void;
};

export const StatisticsContext = createContext<StatisticsContextProps>({
  isStatisticsActive: false,
  toggleStatistics: () => {},
  isColorActive: "inactive",
  toggleColor: () => {},
});

export const StatisticsProvider = ({ children }: any) => {
  const [isStatisticsActive, setStatisticsActive] = useState<boolean>(false);

  const toggleStatistics = () => {
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
