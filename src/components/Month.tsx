import moment from "moment";

import { FC } from "react";
import Day from "./Day";
import "./Month.scss"
type MonthProps = {
  monthNum: number;
  name: string;
};
const Month:FC<MonthProps> = ({monthNum, name})  => {
 
  //TODO заменить на текущий год
  const year = '2022' //new Date().getFullYear();
  const daysInMonth = moment(year+'-'+monthNum, 'YYYY-MM').daysInMonth()

    const days = Array.from({length: 31}, (_, index) => {
      const dayNumber = index +1
      // есть ли день с таким номером в этом месяце
    
      const isInMonth = daysInMonth - dayNumber > -1
      return <Day key={index} dayNum={dayNumber} isInMonth={isInMonth}/>;
    });
    return (
      <div>
        <div className="year-container">
        <div className="monthNum"> {name} </div>
        {days}
        </div>
      </div>
    );
}

export default Month
