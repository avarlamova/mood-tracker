import EmojiPicker from "emoji-picker-react";
import React, { useContext, useState } from "react";
import { IEmoji } from "../types";
import { MoodsContext } from "../contexts/MoodsContext";
import "./NewMoodForm.scss";

const NewMoodForm = ({ setNewMoodAdded }: any) => {
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);

  const [newMood, setNewMood] = useState<string>("");
  const [newMoodEmoji, setNewMoodEmoji] = useState<string>("");
  const { addNewMood } = useContext(MoodsContext);

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
    setNewMoodAdded(false);
    setNewMood("");
    setNewMoodEmoji("");
  };
  return (
    <form className="newMood-form" onSubmit={handleNewMoodSubmit}>
      <label htmlFor="newMood">New mood name</label>
      <input
        type="text"
        id="newMood"
        // placeholder="New mood name"
        onChange={handleAddingMood}
      ></input>
      {/* <label htmlFor="newMoodEmoji"></label> */}
      <button onClick={() => setEmojiPickerOpen(true)}>
        Pick new mood's emoji
      </button>
      <input
        type="text"
        id="newMoodEmoji"
        value={newMoodEmoji}
        disabled
      ></input>

      {isEmojiPickerOpen && (
        <EmojiPicker
          onEmojiClick={handleAddingEmoji}
          autoFocusSearch={true}
          width={350}
        />
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default NewMoodForm;
