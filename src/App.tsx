import "./App.css";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import ModalContext from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";
import { useContext, useState } from "react";

const App = () => {
  const [modalShown, setModalShown] = useState(false);

  const openModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  return (
    <ModalContext.Provider value={{ modalShown, openModal, closeModal }}>
      {modalShown && (
        <ModalWrapper
          children={<EditWindow />}
          toggleModal={console.log(true)}
        />
      )}
      <Year />
    </ModalContext.Provider>
  );
};

export default App;
