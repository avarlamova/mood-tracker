import "./App.css";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import ModalContext from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";
import { useState } from "react";
import { DaysContextProvider } from "./contexts/DaysContext";
import { MoodsContext } from "./contexts/MoodsContext";
import ToggleStatistics from "./components/ToggleStatistics";
import Statistics from "./components/Statistics";

const App = () => {
  const [modalShown, setModalShown] = useState(false);
  const openModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  return (
    <DaysContextProvider>
      <ModalContext.Provider value={{ modalShown, openModal, closeModal }}>
        {modalShown && <ModalWrapper children={<EditWindow />} />}
        <Year />
        <div className="statistics-wrapper">
          <Statistics />
          <ToggleStatistics />
        </div>
      </ModalContext.Provider>
    </DaysContextProvider>
  );
};

export default App;
