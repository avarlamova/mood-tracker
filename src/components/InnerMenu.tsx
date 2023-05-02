import { FC, useContext, useEffect, useState } from "react";
import { DaysContext } from "../contexts/DaysContext";
import { MoodsContext } from "../contexts/MoodsContext";
import "./InnerMenu.scss";
import NewMoodForm from "./NewMoodForm";
import { ReactComponent as DeleteIcon } from "../assets/DeleteIcon.svg";

const InnerMenu: FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");

  const [isNewMoodAdded, setNewMoodAdded] = useState<boolean>(false);

  const { chooseMood, selectedDay } = useContext(DaysContext);
  const { moods, deleteMood } = useContext(MoodsContext);

  useEffect(() => {
    if (selectedDay.mood) {
      setSelectedMood(selectedDay.mood);
    }
  }, [selectedDay.mood]);

  const handleMoodClick = (value: string) => {
    if (!isNewMoodAdded) {
      if (value === selectedMood) {
        chooseValues(""); // clear values
      } else {
        chooseValues(value);
      }
    }
  };

  const chooseValues = (moodValue: string) => {
    chooseMood(moodValue);
    setSelectedMood(moodValue);
  };

  const handleNewMoodClick = () => {
    chooseValues(""); // clear values
    setNewMoodAdded(!isNewMoodAdded);
    // setNewMood("");
    // setNewMoodEmoji("");
  };

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id, isCustom } = el;
    const classNames =
      "list-item" + (selectedMood === value ? " selected" : "");

    return (
      <li
        className={classNames}
        key={id}
        onClick={() => handleMoodClick(value)}
      >
        <div>{emoji}</div>
        <div>{value}</div>
        {isCustom && (
          <DeleteIcon onClick={() => deleteMood(id)} className="deleteIcon" />
        )}
      </li>
    );
  });
  return (
    <ul className="emoji-list">
      {renderedMoods}
      <li className="bullet-add" onClick={() => handleNewMoodClick()}>
        <input type="checkbox" defaultChecked={isNewMoodAdded}></input> Add new
        mood
      </li>
      {isNewMoodAdded && <NewMoodForm setNewMoodAdded={setNewMoodAdded} />}
    </ul>
  );
};

export default InnerMenu;
