import React, { FC, useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import ModalContext from "../contexts/ModalContext";

import "./Day.scss";

type DayProps = {
  dayNum: number;
  monthNum: number;
  isInMonth: boolean;
};

const Day: FC<DayProps> = ({ dayNum, monthNum, isInMonth }) => {
  const { openModal } = useContext(ModalContext);
  const { chooseDay, selectedDay } = useContext(DaysContext);

  const toggleModal = () => {
    openModal();
    chooseDay({
      day: dayNum,
      month: monthNum,
      year: new Date().getFullYear(),
    });
  };

  const computedStyle = isInMonth ? "day" : "day absent";
  return (
    <div className={computedStyle} onClick={toggleModal}>
      {dayNum}
    </div>
  );
};
export default Day;
