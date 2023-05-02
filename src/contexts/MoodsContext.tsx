import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

type MoodsContextProps = {
  moods: Mood[];
  moodsMap: {
    [val: string]: string;
  };
  addNewMood: (newMood: Mood) => void;
  deleteMood: (id: string | undefined) => void;
};

interface Mood {
  value: string;
  emoji: string;
  id?: string;
  isCustom: boolean;
}

const defaultMoods = [
  { value: "Happy", emoji: "😊", id: "Happy", isCustom: false }, //&#x1F60A;
  { value: "Fine", emoji: "🙂", id: "Fine", isCustom: false },
  { value: "Meh", emoji: "😒", id: "Meh", isCustom: false },
  { value: "Sad", emoji: "😞", id: "Sad", isCustom: false },
  { value: "Awful", emoji: "🤬", id: "Awful", isCustom: false },
];

export const MoodsContext = createContext<MoodsContextProps>({
  moods: [],
  moodsMap: {},
  addNewMood: () => {},
  deleteMood: () => {},
});

export const MoodsContextProvider = ({ children }: any) => {
  const [customMoods, setCustomMoods] = useLocalStorage("moods", []);
  const [moods, setMoods] = useState(defaultMoods.concat(customMoods));

  const addNewMood = (newMood: Mood) => {
    const newValue = { ...newMood, id: uuidv4() };
    setMoods([...moods, newValue]);
    setCustomMoods([...customMoods, newValue]);
    // add to local storage
  };

  const deleteMood = (id: string | undefined) => {
    if (id) {
      setMoods(moods.filter((el: Mood) => el.id !== id));
      setCustomMoods(customMoods.filter((el: Mood) => el.id !== id));
    }
  };
  const moodsMap = moods.reduce((result: any, mood) => {
    result[mood.value] = mood.emoji;
    return result;
  }, {});
  return (
    <MoodsContext.Provider
      value={{
        moods,
        moodsMap,
        addNewMood,
        deleteMood,
      }}
    >
      {children}
    </MoodsContext.Provider>
  );
};
