import React, { FC, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

import "./Day.scss";

type DayProps = {
  dayNum: number;
  isInMonth: boolean;
};

const Day: FC<DayProps> = ({ dayNum, isInMonth }) => {
  const { modalShown, setModalShown } = useContext(ModalContext);

  const handleClick = () => {
    setModalShown();
  };
  // state = {
  //   daysCount: moment("2022-" + this.props.month, "YYYY-MM").daysInMonth(),
  //   computedStyle: "day-default",
  //   today: moment().format("YYYY-MM-DD"),
  //   id: "2022-" + this.props.month + "-",
  // };

  // handleDayClick(e) {
  //   let id = e.target.id; // day id

  //   console.log(id);
  // }

  // if (month < 10) month = "0" + month;
  // const initialDays = Array(31)
  //   .fill(0)
  //   .map((el, i) => {
  //     return i;
  //   })
  //   .filter((i) => i > 0);

  // initialDays.unshift(month);
  // console.log(initialDays)

  const computedStyle = isInMonth ? "day" : "day absent";
  return (
    <div className={computedStyle} onClick={handleClick}>
      {dayNum}
    </div>
  );
};
export default Day;
