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
  const { chooseDay, selectedDay, findMood } = useContext(DaysContext);

  const toggleModal = () => {
    const currYear = new Date().getFullYear();
    const dateId = currYear + "-" + monthNum + "-" + dayNum;
    const mood = findMood(dateId);
    chooseDay(
      {
        day: dayNum,
        month: monthNum,
        year: currYear,
      },
      dateId,
      mood
    );
    openModal();
  };

  const computedStyle = isInMonth ? "day" : "day absent";
  return (
    <div className={computedStyle} onClick={toggleModal}>
      {dayNum}
    </div>
  );
};
export default Day;
