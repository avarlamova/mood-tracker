import { FC, useContext, useEffect, useState } from "react";
import { DaysContext } from "../contexts/DaysContext";
import { useMoodsContext } from "../contexts/MoodsContext";
import "./InnerMenu.scss";
import EmojiPicker from "emoji-picker-react";
import { IEmoji } from "../types";

const InnerMenu: FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");

  const [isNewMoodAdded, setNewMoodAdded] = useState<boolean>(false);
  const [newMood, setNewMood] = useState<string>("");
  const [newMoodEmoji, setNewMoodEmoji] = useState<string>("");

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

  const handleNewMoodClick = () => {
    setNewMoodAdded(!isNewMoodAdded);
    setNewMood("");
    setNewMoodEmoji("");
  };

  const handleAddingEmoji = (val: IEmoji) => {
    const addedEmoji = val.emoji;
    setNewMoodEmoji(addedEmoji);
  };

  const handleAddingMood = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNewMood(e.target.value);
    }
  };

  const handleNewMoodSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMoodEmoji && newMood) {
      addNewMood({ value: newMood, emoji: newMoodEmoji });
    }
  };

  const { moods, addNewMood } = useMoodsContext();

  const renderedMoods = moods.map((el) => {
    const { value, emoji, id } = el;
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
      </li>
    );
  });
  return (
    <ul className="emoji-list">
      {renderedMoods}
      <li className="bullet-add" onClick={() => handleNewMoodClick()}>
        {/* TODO + as marker */}
        <input type="checkbox" checked={isNewMoodAdded}></input> Add new mood
        name
      </li>
      {isNewMoodAdded && (
        <form onSubmit={handleNewMoodSubmit}>
          <input
            type="text"
            placeholder="New mood name"
            onChange={handleAddingMood}
          ></input>
          <input type="text" value={newMoodEmoji} disabled></input>

          {!newMoodEmoji && (
            <EmojiPicker
              onEmojiClick={handleAddingEmoji}
              autoFocusSearch={true}
              // width={250}
            />
          )}
          <button type="submit">Add</button>
        </form>
      )}
    </ul>
  );
};

export default InnerMenu;
