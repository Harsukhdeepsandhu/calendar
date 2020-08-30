import React, { useState, useEffect } from 'react';
import './App.css';
import Month from './components/Month';

function App() {
  const [days, setDays] = useState([]);
  const [startDayOfMonth, setStartDayOfMonth] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [totalDays, setTotalDays] = useState("");

  // let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const loadState = () => {
      let m = new Date().getMonth();
      let y = new Date().getFullYear();
      setMonth(m);
      setYear(y);
      setStartDayOfMonth(new Date(y, m, 1).getDay());
      setTotalDays(new Date(y, m + 1, 0).getDate());
    }
    loadState();
  }, []);

  return (
    <div>
      <Month
        days={days}
        setDays={setDays}
        setStartDayOfMonth={setStartDayOfMonth}
        startDayOfMonth={startDayOfMonth}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        totalDays={totalDays}
        setTotalDays={setTotalDays}
      />
    </div>
  );
}

export default App;
