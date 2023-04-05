import { FC, useContext, useEffect, useState } from "react";
import { DaysContext } from "../contexts/DaysContext";
import { useMoodsContext } from "../contexts/MoodsContext";
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
    if (value === selectedMood) {
      chooseMood("");
      setSelectedMood("");
    } else {
      chooseMood(value);
      setSelectedMood(value);
    }
  };

  const { moods } = useMoodsContext();

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id } = el;
    const classNames =
      "list-item" + (selectedMood === value ? " selected" : "");

    return (
      <ul
        key={id}
        className="emoji-list"
        onClick={() => handleMoodClick(value)}
      >
        <li className={classNames}>
          <div>{emoji}</div>
          <div>{value}</div>
        </li>
      </ul>
    );
  });
  return <div>{renderedMoods}</div>;
};

export default InnerMenu;
