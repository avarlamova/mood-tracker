import "./App.css";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import ModalContext from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";
import { useState } from "react";
import { DaysContextProvider } from "./contexts/DaysContext";

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
      </ModalContext.Provider>
    </DaysContextProvider>
  );
};

export default App;
