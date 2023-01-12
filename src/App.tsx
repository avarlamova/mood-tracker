import "./App.css";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import { ModalProvider, useModalContext } from "./contexts/ModalContext";
import ModalWrapper from "./components/ModalWrapper";

const App = () => {
  const { modalShown, setModalShown } = useModalContext();
  console.log(setModalShown);
  return (
    <div>
      <ModalProvider>
        {modalShown && (
          <ModalWrapper
            children={<EditWindow />}
            toggleModal={setModalShown(true)}
          />
        )}
        <Year />
        {modalShown}
      </ModalProvider>
    </div>
  );
};

export default App;
