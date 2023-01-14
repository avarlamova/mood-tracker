import React, { FC, useContext } from "react";
import ModalContext from "../contexts/ModalContext";

import "./Day.scss";

type DayProps = {
  dayNum: number;
  isInMonth: boolean;
};

const Day: FC<DayProps> = ({ dayNum, isInMonth }) => {
  const { modalShown, openModal } = useContext(ModalContext);
  const computedStyle = isInMonth ? "day" : "day absent";
  return (
    <div className={computedStyle} onClick={openModal}>
      {dayNum}
    </div>
  );
};
export default Day;
