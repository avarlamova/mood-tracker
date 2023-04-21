import EmojiPicker from "emoji-picker-react";
import React, { useContext, useState } from "react";
import { IEmoji } from "../types";
import { MoodsContext } from "../contexts/MoodsContext";
import "./NewMoodForm.scss";

const NewMoodForm = ({ setNewMoodAdded }: any) => {
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);

  const [newMood, setNewMood] = useState<string>("");
  const [newMoodEmoji, setNewMoodEmoji] = useState<string>("😀");
  const { addNewMood } = useContext(MoodsContext);

  const handleAddingEmoji = (val: IEmoji) => {
    const addedEmoji = val.emoji;
    setNewMoodEmoji(addedEmoji);
    setEmojiPickerOpen(false);
  };

  const handleAddingMood = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNewMood(e.target.value);
    }
  };

  const handleNewMoodSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewMood({
      value: newMood,
      emoji: newMoodEmoji,
      isCustom: true,
      id: newMood,
    });
    setNewMoodAdded(false);
    setNewMood("");
    setNewMoodEmoji("");
  };
  return (
    <form className="newMood-form" onSubmit={handleNewMoodSubmit}>
      <div className="emojiContainer">
        <input
          type="text"
          id="newMood"
          placeholder="Mood name"
          onChange={handleAddingMood}
        ></input>
        {/* <button
          className="pickEmojiBtn"
          type="button"
          onClick={() => setEmojiPickerOpen(!isEmojiPickerOpen)}
        >
          Pick emoji
        </button> */}
        <button
          type="button"
          onClick={() => setEmojiPickerOpen(!isEmojiPickerOpen)}
          className="emojiBtn"
        >
          {newMoodEmoji}
        </button>
      </div>
      {isEmojiPickerOpen && (
        <EmojiPicker
          onEmojiClick={handleAddingEmoji}
          autoFocusSearch={true}
          width={350}
        />
      )}
      {newMoodEmoji && newMood && <button type="submit">Add</button>}
    </form>
  );
};

export default NewMoodForm;
