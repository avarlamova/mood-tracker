import { createContext, useContext } from "react";

type DaysContextProps = {
  hasData: boolean;
  userDays: UserDay[];
};

interface UserDay {
  date: Date;
  mood: string;
}

export const DaysContext = createContext<DaysContextProps>({
  hasData: false,
  userDays: [
    {
      date: new Date("2023-01-01"),
      mood: "sad",
    },
  ],
});
export const useDaysContext = () => useContext(DaysContext);
