import { createContext, useContext, useState } from "react";

type ModalContextProps = {
  modalShown: boolean;
  setModalShown: (v?: boolean) => void;
};

export const ModalContext = createContext<ModalContextProps>({
  modalShown: false,
  setModalShown: () => {},
});

export const ModalProvider = ({ children }: any) => {
  const [modalShown, setModalShown] = useState(false);

  function toggleModal() {
    setModalShown(!modalShown);
  }
  return (
    <ModalContext.Provider value={{ modalShown, setModalShown: toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
