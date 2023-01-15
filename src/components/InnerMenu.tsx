import { FC, useContext, useState } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./InnerMenu.scss";

const InnerMenu: FC = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const { chooseMood, isInUserDays, selectedDay } = useContext(DaysContext);

  const handleMoodClick = (value: string) => {
    chooseMood(value);
    setSelectedMood(value);
  };

  const moods = [
    { value: "Happy", emoji: "😊", id: "Happy" },
    { value: "Sad", emoji: "😔", id: "Sad" },
    { value: "Anxious", emoji: "😰", id: "Anxious" },
    { value: "Disappointed", emoji: "😞", id: "Disappointed" },
  ];

  if (isInUserDays()) {
    // setSelectedMood(selectedDay.mood);
    console.log(selectedDay.mood, selectedMood);
  }

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id } = el;
    const classNames =
      "list-item" + (selectedMood === value ? " selected" : "");

    return (
      <div
        key={id}
        className="emoji-list"
        onClick={() => handleMoodClick(value)}
      >
        <div className={classNames}>
          {emoji}
          {value}
        </div>
      </div>
    );
  });
  return <div>{renderedMoods}</div>;
};

export default InnerMenu;
