import "./App.scss";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import ModalContext from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";
import { useState } from "react";
import { DaysContextProvider } from "./contexts/DaysContext";
import ToggleColor from "./components/ToggleColor";
import Statistics from "./components/Statistics";
import { StatisticsContext } from "./contexts/StatisticsContext";
import StatisticsButton from "./components/StatisticsButton";
import useLocalStorage from "./hooks/useLocalStorage";
// import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [modalShown, setModalShown] = useState(false);
  const openModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  const [isStatisticsActive, setStatisticsActive] = useState<boolean>(false);

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
          {modalShown && (
            <ModalWrapper children={<EditWindow />} toggleModal={closeModal} />
          )}
          {isStatisticsActive && (
            <ModalWrapper
              children={<Statistics />}
              toggleModal={toggleStatistics}
            />
          )}
          <Year year={"2023"} />
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
