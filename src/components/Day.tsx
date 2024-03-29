import React, { FC, useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import ModalContext from "../contexts/ModalContext";
import { MoodsContext } from "../contexts/MoodsContext";
import { StatisticsContext } from "../contexts/StatisticsContext";

import "./Day.scss";

type DayProps = {
  dayNum: number;
  monthNum: number;
  isInMonth: boolean;
};

const Day: FC<DayProps> = ({ dayNum, monthNum, isInMonth }) => {
  const { openModal } = useContext(ModalContext);
  const { chooseDay, findMood } = useContext(DaysContext);
  const { isColorActive } = useContext(StatisticsContext);
  const currYear = new Date().getFullYear();
  const dateId = currYear + "-" + monthNum + "-" + dayNum;
  const mood = findMood(dateId);

  const { moodsMap } = useContext(MoodsContext);
  let moodEmoji: string = "";

  if (mood) {
    moodEmoji = moodsMap[mood];
  }

  const toggleModal = () => {
    if (isInMonth) {
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
    }
  };

  let computedStyle = isInMonth ? "day" : "day absent";
  if (mood && moodEmoji && isColorActive === "active") {
    computedStyle += " hasMood " + mood;
  }

  return (
    <div className={computedStyle} onClick={toggleModal}>
      <div className="dayWrapper">
        {mood && <div className="emoji">{moodEmoji}</div>} {dayNum}
      </div>
    </div>
  );
};
export default Day;
