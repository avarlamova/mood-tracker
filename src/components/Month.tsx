import moment from "moment";

import { FC } from "react";
import Day from "./Day";
import useWindowSize from "../hooks/useWindowSize";

import "./Month.scss";
type MonthProps = {
  monthNum: number;
  name: string;
  shortMonthName: string;
};
const Month: FC<MonthProps> = ({ monthNum, name, shortMonthName }) => {
  const year = new Date().getFullYear();
  const size = useWindowSize();
  let isMobile = false;

  if (size.width && size.width < 601) {
    isMobile = true;
  }

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
        <div className="monthName"> {isMobile ? shortMonthName : name} </div>
        <div className="daysContainer">{days}</div>
      </div>
    </div>
  );
};

export default Month;
