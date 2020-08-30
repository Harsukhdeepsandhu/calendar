import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/title';
import Month from './components/Month';

function App() {
  const [days, setDays] = useState([]);
  const [startDayOfMonth, setStartDayOfMonth] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [totalDays, setTotalDays] = useState("");

  //update total day and strating day to rerender on month change
  const updateDays = (y, m) => {
    setStartDayOfMonth(new Date(y, m, 1).getDay());
    setTotalDays(new Date(y, m + 1, 0).getDate());
  }

  useEffect(() => {
    const loadState = () => {
      let m = new Date().getMonth();
      let y = new Date().getFullYear();
      setMonth(m);
      setYear(y);
      updateDays(y, m);
    }
    loadState();
  }, []);

  useEffect(() => {
    updateDays(year, month);
  }, [month, year]);

  return (
    <div className="app-container">
      <Title
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
