import { createContext, useContext, useState } from "react";

type DaysContextProps = {
  selectedDay: UserDay;
  userDays: UserDay[] | any[];
  chooseDay: any;
  chooseMood: (mood: string) => void;
  saveDayChanges: () => void;
  isInUserDays: () => boolean;
  findMood: (mood: string) => void;
};

interface UserDay {
  date?: { day: number; month: number; year: number };
  mood?: string;
  dateId?: string;
}

export const DaysContext = createContext<DaysContextProps>({
  selectedDay: {},
  userDays: [],
  chooseDay: () => {},
  chooseMood: () => {},
  saveDayChanges: () => {},
  isInUserDays: () => false,
  findMood: () => {},
});

export const DaysContextProvider = ({ children }: any) => {
  const [selectedDay, setSelectedDay] = useState<UserDay>({});
  const [userDays, setUserDays] = useState<UserDay[]>([]);
  const chooseDay = (
    obj: {
      day: number;
      month: number;
      year: number;
    },
    dateId: string,
    mood: string
  ) => {
    setSelectedDay({
      date: obj,
      mood: mood,
      dateId: dateId,
    });
  };

  const chooseMood = (mood: string) => {
    const newSelectedDay = selectedDay;
    newSelectedDay.mood = mood;
    setSelectedDay(newSelectedDay);
    saveDayChanges();
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

  const findMood = (dateId: string) => {
    const targetDay = userDays.filter((el) => el.dateId === dateId)[0];
    if (targetDay) {
      return targetDay.mood;
    }
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
        findMood: findMood,
      }}
    >
      {children}
    </DaysContext.Provider>
  );
};

export const useDaysContext = () => useContext(DaysContext);
