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
    { value: "Fine", emoji: "🙂", id: "Fine" },
    { value: "Meh", emoji: "😒", id: "Meh" },
    { value: "Sad", emoji: "😞", id: "Sad" },
    { value: "Awful", emoji: "🤬", id: "Awful" },
  ],
  moodsMap: {
    Happy: "😊",
    Fine: "🙂",
    Meh: "😒",
    Sad: "😞",
    Awful: "🤬",
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
