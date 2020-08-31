import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/title';
import Month from './components/Month';

function App() {
  const [startDayOfMonth, setStartDayOfMonth] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [totalDays, setTotalDays] = useState("");

  useEffect(() => {
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    setStartDayOfMonth(new Date(year, month, 1).getDay());
    setTotalDays(new Date(year, month + 1, 0).getDate());
  }, [month, year]);

  return (
    <div className="app-container">
      <Title
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <Month
        startDayOfMonth={startDayOfMonth}
        totalDays={totalDays}
        month={month}
        year={year}
      />
    </div>
  );
}

export default App;
