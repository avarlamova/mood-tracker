import { createContext } from "react";

const ModalContext = createContext({
  modalShown: false,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
