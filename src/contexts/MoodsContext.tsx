import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

// TODO ability to delete custom moods
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
    let idx = moods.findIndex((el) => el.id === id);
    if (idx !== -1) {
      moods.splice(idx, 1);
    }
  };
  const moodsMap = moods.reduce((result: any, mood) => {
    result[mood.value] = mood.emoji;
    return result;
  }, {});
  // = {
  //   Happy: "😊",
  //   Fine: "🙂",
  //   Meh: "😒",
  //   Sad: "😞",
  //   Awful: "🤬",
  // };
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
// export const useMoodsContext = () => useContext(MoodsContext);
