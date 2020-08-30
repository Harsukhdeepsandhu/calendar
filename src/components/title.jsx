import React from 'react'

const title = ({ days, setDays, startDayOfMonth, setStartDayOfMonth, month, setMonth, year, setYear, totalDays, setTotalDays }) => {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleIncrement = () => month === 11 ? (setMonth(0), setYear(year + 1)) : setMonth(month + 1);

    const handleDecrement = () => month === 0 ? (setMonth(11), setYear(year - 1)) : setMonth(month - 1);

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={handleDecrement}>left</td>
                    <td>{monthNames[month]}, {year}</td>
                    <td onClick={handleIncrement}>right</td>
                </tr>
            </thead>
        </table>
    )
}

export default title;
