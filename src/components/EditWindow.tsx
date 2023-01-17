import InnerMenu from "./InnerMenu";
import "./EditWindow.scss";
import ModalContext from "../contexts/ModalContext";
import { useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import moment from "moment";

const EditWindow = (message: any) => {
  const { closeModal } = useContext(ModalContext);
  const { selectedDay, userDays, saveDayChanges } = useContext(DaysContext);
  let formattedDate;
  if (selectedDay?.date) {
    formattedDate = moment(
      new Date(
        selectedDay.date.year,
        selectedDay.date.month - 1,
        selectedDay.date.day
      )
    ).format("DD.MM.YYYY");
  }
  const saveChanges = () => {
    saveDayChanges();
    closeModal();
  };

  const closeWindow = () => {
    closeModal();
  };

  return (
    <div className="content">
      <h2> How are you today? </h2>
      <h2>{formattedDate ? formattedDate : ""}</h2>
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
  );
};

export default EditWindow;
