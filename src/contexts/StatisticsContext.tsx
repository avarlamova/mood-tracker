import { createContext } from "react";

type StatisticsContextProps = {
  isStatisticsActive: boolean;
  toggleStatistics: () => void;
  isColorActive: boolean;
  toggleColor: () => void;
};

const StatisticsContext = createContext<StatisticsContextProps>({
  isStatisticsActive: false,
  toggleStatistics: () => {},
  isColorActive: false,
  toggleColor: () => {},
});

export default StatisticsContext;
