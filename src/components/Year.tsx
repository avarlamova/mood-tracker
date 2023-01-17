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
  return <div>{renderedMonths}</div>;
};

export default Year;
