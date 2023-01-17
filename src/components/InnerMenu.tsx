import { FC, useContext, useEffect, useState } from "react";
import { DaysContext } from "../contexts/DaysContext";
import "./InnerMenu.scss";

const InnerMenu: FC = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const { chooseMood, selectedDay } = useContext(DaysContext);

  useEffect(() => {
    if (selectedDay.mood) {
      setSelectedMood(selectedDay.mood);
    }
  }, [selectedDay.mood]);

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
