import { createContext, useContext } from "react";
// TODO ability to add custom moods
type MoodsContextProps = {
  moods: Mood[];
  moodsMap: {
    [val: string]: string;
  };
};

interface Mood {
  value: string;
  emoji: string;
  id: string;
}

export const MoodsContext = createContext<MoodsContextProps>({
  moods: [
    { value: "Happy", emoji: "😊", id: "Happy" },
    { value: "Sad", emoji: "😔", id: "Sad" },
    { value: "Anxious", emoji: "😰", id: "Anxious" },
    { value: "Disappointed", emoji: "😞", id: "Disappointed" },
  ],
  moodsMap: {
    Happy: "😊",
    Sad: "😔",
    Anxious: "😰",
    Disappointed: "😞",
  },
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
