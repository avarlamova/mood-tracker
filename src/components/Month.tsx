import moment from "moment";

import { FC } from "react";
import Day from "./Day";

import "./Month.scss";
type MonthProps = {
  monthNum: number;
  name: string;
};
const Month: FC<MonthProps> = ({ monthNum, name }) => {
  const year = new Date().getFullYear();
  const daysInMonth = moment(year + "-" + monthNum, "YYYY-MM").daysInMonth();

  const days = Array.from({ length: 31 }, (_, index) => {
    const dayNumber = index + 1;
    // есть ли день с таким номером в этом месяце

    const isInMonth = daysInMonth - dayNumber > -1;
    return (
      <Day
        key={index}
        dayNum={dayNumber}
        monthNum={monthNum}
        isInMonth={isInMonth}
      />
    );
  });
  return (
    <div>
      <div className="monthContainer">
        <div className="monthName"> {name} </div>
        <div className="daysContainer">{days}</div>
      </div>
    </div>
  );
};

export default Month;
