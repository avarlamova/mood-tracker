import React, { FC, useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";
import ModalContext from "../contexts/ModalContext";
import { useMoodsContext } from "../contexts/MoodsContext";

import "./Day.scss";

type DayProps = {
  dayNum: number;
  monthNum: number;
  isInMonth: boolean;
};

const Day: FC<DayProps> = ({ dayNum, monthNum, isInMonth }) => {
  const { openModal } = useContext(ModalContext);
  const { chooseDay, selectedDay, findMood } = useContext(DaysContext);
  const currYear = new Date().getFullYear();
  const dateId = currYear + "-" + monthNum + "-" + dayNum;
  const mood = findMood(dateId);
  const { moodsMap } = useMoodsContext();
  let moodEmoji: string = "";

  if (mood) {
    moodEmoji = moodsMap[mood];
  }

  const toggleModal = () => {
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

  let computedStyle = isInMonth ? "day" : "day absent";
  if (mood && moodEmoji) {
    computedStyle += " " + mood;
  }
  return (
    <div className={computedStyle} onClick={toggleModal}>
      {mood && <div className="emoji">{moodEmoji}</div>} {dayNum}
    </div>
  );
};
export default Day;
