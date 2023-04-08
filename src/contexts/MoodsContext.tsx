import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO ability to add custom moods
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
const addNewMood = (newMood: Mood) => {
  const newValue = { ...newMood, id: uuidv4() };
  moods.push(newValue);
};

const moods = [
  { value: "Happy", emoji: "😊", id: "Happy" }, //&#x1F60A;
  { value: "Fine", emoji: "🙂", id: "Fine" },
  { value: "Meh", emoji: "😒", id: "Meh" },
  { value: "Sad", emoji: "😞", id: "Sad" },
  { value: "Awful", emoji: "🤬", id: "Awful" },
];
export const MoodsContext = createContext<MoodsContextProps>({
  moods,
  moodsMap: {
    Happy: "😊",
    Fine: "🙂",
    Meh: "😒",
    Sad: "😞",
    Awful: "🤬",
  },
  addNewMood,
});

// export const MoodsContextProvider = ({ children }: any) => {
//   return (
//     <MoodsContext.Provider
//       value={{
//         moods: moods,
//         moodsMap: moodsMap,
//       }}
//     >
//       {children}
//     </MoodsContext.Provider>
//   );
// };
export const useMoodsContext = () => useContext(MoodsContext);
