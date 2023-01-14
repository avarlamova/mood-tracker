import InnerMenu from "./InnerMenu";
import "./EditWindow.scss";
import ModalContext from "../contexts/ModalContext";
import { useContext } from "react";

const EditWindow = (message: any) => {
  const { closeModal } = useContext(ModalContext);
  const saveChanges = () => {
    closeModal();
    console.log("saveChanges");
  };

  const closeWindow = () => {
    closeModal();
    console.log("closeWindow");
  };

  return (
    <div className="modal" id="modal">
      <div className="content">
        <h2> How are you today? </h2>
        <InnerMenu />
        <div className="actions">
          <button className="actions btn-save" onClick={saveChanges}>
            Save changes
          </button>
          <button className="actions btn-cancel" onClick={closeWindow}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWindow;
