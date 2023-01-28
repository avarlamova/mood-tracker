import "./App.scss";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import ModalContext from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";
import { useState } from "react";
import { DaysContextProvider } from "./contexts/DaysContext";
// import { MoodsContext } from "./contexts/MoodsContext";
import ToggleColor from "./components/ToggleColor";
import Statistics from "./components/Statistics";
import StatisticsContext from "./contexts/StatisticsContext";
import StatisticsButton from "./components/StatisticsButton";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [modalShown, setModalShown] = useState(false);
  const openModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  const [isStatisticsActive, setStatisticsActive] = useState(false);

  const toggleStatistics = () => {
    setStatisticsActive(!isStatisticsActive);
  };

  const [isColorActive, setColorActive] = useLocalStorage("color", false);
  const toggleColor = () => {
    setColorActive(!isColorActive);
  };
  return (
    <DaysContextProvider>
      <StatisticsContext.Provider
        value={{
          isStatisticsActive,
          toggleStatistics,
          isColorActive,
          toggleColor,
        }}
      >
        <ModalContext.Provider value={{ modalShown, openModal, closeModal }}>
          {modalShown && <ModalWrapper children={<EditWindow />} />}
          {isStatisticsActive && <ModalWrapper children={<Statistics />} />}
          <Year />
          <div className="statistics-wrapper">
            <StatisticsButton />
            <ToggleColor />
          </div>
        </ModalContext.Provider>
      </StatisticsContext.Provider>
    </DaysContextProvider>
  );
};

export default App;
