import { createContext, useContext, useState } from "react";

type DaysContextProps = {
  selectedDay: UserDay;
  userDays: UserDay[];
  chooseDay: any;
  chooseMood: (mood: string) => void;
};

interface UserDay {
  date?: { day: number; month: number; year: number };
  mood?: string;
}

export const DaysContext = createContext<DaysContextProps>({
  selectedDay: {},
  userDays: [
    {
      date: { day: 1, month: 1, year: 2023 },
      mood: "sad",
    },
  ],
  chooseDay: () => {},
  chooseMood: () => {},
});

export const DaysContextProvider = ({ children }: any) => {
  const [selectedDay, setSelectedDay] = useState({});
  const chooseDay = (obj: { day: number; month: number; year: number }) => {
    setSelectedDay({
      date: obj,
      mood: "",
    });
  };

  const chooseMood = (mood: string) => {
    setSelectedDay({ ...selectedDay, mood: mood });
  };

  console.log(selectedDay);
  return (
    <DaysContext.Provider
      value={{
        selectedDay: selectedDay,
        userDays: [
          {
            date: { day: 1, month: 1, year: 2023 },
            mood: "sad",
          },
        ],
        chooseDay: chooseDay,
        chooseMood: chooseMood,
      }}
    >
      {children}
    </DaysContext.Provider>
  );
};

export const useDaysContext = () => useContext(DaysContext);
