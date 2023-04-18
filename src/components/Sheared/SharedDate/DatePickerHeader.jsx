import React from 'react';

const DatePickerHeader = ({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled}) => {
    const years = Array.from({length: (new Date().getFullYear() - 1989)}, (_, i) => 1990 + i);
    const months = Array.from({length: 12}, (_, i) => new Date(0, i).toLocaleString('en', { month: 'long' }));
  
    return (
      <div style={{margin: 10, display: "flex", justifyContent: "center"}}>
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
        <select value={date.getFullYear()} onChange={({target: {value}}) => changeYear(value)}>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
        <select value={months[date.getMonth()]} onChange={({target: {value}}) => changeMonth(months.indexOf(value))}>
          {months.map(month => <option key={month} value={month}>{month}</option>)}
        </select>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
      </div>
    );
  };

export default DatePickerHeader;