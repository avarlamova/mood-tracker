import { createContext, useContext, useState } from "react";

type DaysContextProps = {
  selectedDay: UserDay;
  userDays: UserDay[] | any[];
  chooseDay: any;
  chooseMood: (mood: string) => void;
  saveDayChanges: () => void;
  isInUserDays: () => boolean;
};

interface UserDay {
  date?: { day: number; month: number; year: number };
  mood?: string;
}

export const DaysContext = createContext<DaysContextProps>({
  selectedDay: {},
  userDays: [],
  chooseDay: () => {},
  chooseMood: () => {},
  saveDayChanges: () => {},
  isInUserDays: () => false,
});

export const DaysContextProvider = ({ children }: any) => {
  const [selectedDay, setSelectedDay] = useState<UserDay>({});
  const [userDays, setUserDays] = useState<UserDay[]>([]);
  const chooseDay = (obj: { day: number; month: number; year: number }) => {
    setSelectedDay({
      date: obj,
      mood: "",
    });
  };

  const chooseMood = (mood: string) => {
    setSelectedDay({ ...selectedDay, mood: mood });
  };

  const saveDayChanges = () => {
    setUserDays([...userDays, selectedDay]);
  };

  const isInUserDays = () => {
    return (
      userDays.filter(
        (day) =>
          day.date?.day === selectedDay.date?.day &&
          day.date?.month === selectedDay.date?.month &&
          day.date?.year === selectedDay.date?.year
      ).length > 0
    );
  };

  return (
    <DaysContext.Provider
      value={{
        selectedDay: selectedDay,
        userDays: userDays,
        chooseDay: chooseDay,
        chooseMood: chooseMood,
        saveDayChanges: saveDayChanges,
        isInUserDays: isInUserDays,
      }}
    >
      {children}
    </DaysContext.Provider>
  );
};

export const useDaysContext = () => useContext(DaysContext);
