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
};

interface Mood {
  value: string;
  emoji: string;
  id?: string;
}

const defaultMoods = [
  { value: "Happy", emoji: "😊", id: "Happy" }, //&#x1F60A;
  { value: "Fine", emoji: "🙂", id: "Fine" },
  { value: "Meh", emoji: "😒", id: "Meh" },
  { value: "Sad", emoji: "😞", id: "Sad" },
  { value: "Awful", emoji: "🤬", id: "Awful" },
];

export const MoodsContext = createContext<MoodsContextProps>({
  moods: [],
  moodsMap: {},
  addNewMood: () => {},
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
      }}
    >
      {children}
    </MoodsContext.Provider>
  );
};
// export const useMoodsContext = () => useContext(MoodsContext);
