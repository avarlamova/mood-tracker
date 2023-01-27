import { createContext, useContext, useState } from "react";

type DaysContextProps = {
  selectedDay: UserDay;
  userDays: UserDay[] | any[];
  chooseDay: any;
  chooseMood: (mood: string) => void;
  saveDayChanges: () => void;
  isInUserDays: () => boolean;
  findMood: (mood: string) => string | undefined;
  isStatisticsActive: boolean;
  toggleStatistics: () => void;
};

interface UserDay {
  date?: { day: number; month: number; year: number };
  mood?: string;
  dateId?: string;
}

//TODO вынести свитч в отдельный контекст
export const DaysContext = createContext<DaysContextProps>({
  selectedDay: {},
  userDays: [],
  chooseDay: () => {},
  chooseMood: () => {},
  saveDayChanges: () => {},
  isInUserDays: () => false,
  findMood: () => undefined,
  isStatisticsActive: false,
  toggleStatistics: () => {},
});

export const DaysContextProvider = ({ children }: any) => {
  const [selectedDay, setSelectedDay] = useState<UserDay>({});
  const [userDays, setUserDays] = useState<UserDay[]>([]);
  const [isStatisticsActive, setStatisticsActive] = useState(false);

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
    const dayIdx = userDays.findIndex(
      (day) => day.dateId === selectedDay.dateId
    );
    if (dayIdx > -1) {
      const updatedUserDays = userDays.map((day) => {
        if (day.dateId === selectedDay.dateId) {
          return selectedDay;
        }
        return day;
      });
      setUserDays(updatedUserDays);
    } else {
      console.log([...userDays, selectedDay]);
      setUserDays([...userDays, selectedDay]);
    }
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

  const toggleStatistics = () => {
    setStatisticsActive(!isStatisticsActive);
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
        isStatisticsActive: isStatisticsActive,
        toggleStatistics: toggleStatistics,
      }}
    >
      {children}
    </DaysContext.Provider>
  );
};

export const useDaysContext = () => useContext(DaysContext);
