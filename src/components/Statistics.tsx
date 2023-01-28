import React, { useContext } from "react";
import { DaysContext } from "../contexts/DaysContext";

const Statistics = () => {
  const { userDays } = useContext(DaysContext);
  console.log(userDays);

  const happyDays = userDays.filter((day) => day.mood === "Happy");

  return <div>statistics</div>;
};

export default Statistics;
