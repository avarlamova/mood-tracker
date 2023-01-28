import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type DaysContextProps = {
  selectedDay: UserDay;
  userDays: UserDay[] | any[];
  chooseDay: any;
  chooseMood: (mood: string) => void;
  saveDayChanges: () => void;
  isInUserDays: () => boolean;
  findMood: (mood: string) => string | undefined;
};

export interface UserDay {
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
  findMood: () => undefined,
});

export const DaysContextProvider = ({ children }: any) => {
  const [selectedDay, setSelectedDay] = useState<UserDay>({});
  // const [userDays, setUserDays] = useState<UserDay[]>([]);
  const [userDays, setUserDays] = useLocalStorage("userDays", []);

  // const [storedDays, setStoredDays] = useLocalStorage("userDays", []);
  // console.log(storedDays);

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
    setSelectedDay({ ...selectedDay, mood: mood });
  };

  const saveDayChanges = () => {
    if (userDays) {
      const dayIdx = userDays.findIndex(
        (day: UserDay) => day.dateId === selectedDay.dateId
      );
      let updatedUserDays = [];
      if (dayIdx > -1) {
        updatedUserDays = userDays.map((day: UserDay) => {
          if (day.dateId === selectedDay.dateId) {
            return selectedDay;
          }
          return day;
        });
      } else {
        updatedUserDays = [...userDays, selectedDay];
      }
      setUserDays(updatedUserDays);
      // setStoredDays(updatedUserDays);
    }
  };

  const isInUserDays = () => {
    return (
      userDays.filter(
        (day: UserDay) =>
          day.date?.day === selectedDay.date?.day &&
          day.date?.month === selectedDay.date?.month &&
          day.date?.year === selectedDay.date?.year
      ).length > 0
    );
  };

  const findMood = (dateId: string) => {
    if (userDays) {
      const targetDay = userDays.filter(
        (el: UserDay) => el.dateId === dateId
      )[0];
      if (targetDay) {
        return targetDay.mood;
      }
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
