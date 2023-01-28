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
        name={month}
        shortMonthName={shortMonthNames[index]}
      />
    );
  });
  return <div>{renderedMonths}</div>;
};

export default Year;
