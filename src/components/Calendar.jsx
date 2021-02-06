import { React, useState } from "react";
import "./Calendar.css";

export default function Calendar() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [numDays, setNumDays] = useState(31);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(3);
  const [selectedDate, setSelectedDate] = useState(1);

  const getDaysArray = () => {
    let totWeeks = Math.ceil((numDays + firstDayOfMonth) / 7);
    let daysArray = [];
    for (let week = 0; week < totWeeks; week++) {
      let curWeek = [];
      for (let i = 1; i <= 7; i++) {
        let curDate = week * 7 + i - firstDayOfMonth;
        if (curDate <= 0 || curDate > numDays) {
          curWeek.push(["", curDate]);
        } else {
          curWeek.push([curDate.toString(), curDate]);
        }
      }
      daysArray.push(curWeek);
    }
    return daysArray;
  };

  return (
    <>
      Selected date: {selectedDate}
      <table className="table">
        <thead>
          <tr key="week-days" className="week-days">
            {weekDays.map((day) => (
              <th key={day} className="calendar-weekdays">
                {day}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getDaysArray().map((week) => (
            <tr key={week[0][1]} className="calendar-week">
              {week.map((day) => (
                <td
                  key={day[1]}
                  className={`calendar-day ${
                    selectedDate == day[0] && "selected"
                  }`}
                  onClick={() => setSelectedDate(day[0])}
                >
                  {day[0]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
