import { FC } from "react";
import Month from "./Month";
import './Year.scss';

type YearProps = {
  year: string;
};

const Year: FC<YearProps> = ({ year }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const shortMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const renderedMonths = months.map((month, index) => {
    return (
      <Month
        key={index}
        monthNum={index + 1}
      />
    );
  });

  const monthNames = months.map((month, index) => {
    return (
      <div>
        {month}
      </div>
    );
  });

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Moods of {year}
      </h1>
      <div className="year">
        <div className="monthNames">
          {monthNames}
        </div>
        <div>
          {renderedMonths}
        </div>
      </div>
    </>
  );
};

export default Year;
