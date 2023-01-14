import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import Month from "./Month";

const Year = () => {
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
  const renderedMonths = months.map((month, index) => {
    return <Month key={index} monthNum={index + 1} name={month} />;
  });
  return (
    <div>
      Year 2023
      {renderedMonths}
    </div>
  );
};

export default Year;
