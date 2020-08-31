import React from 'react'

const title = ({ month, setMonth, year, setYear }) => {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleYearIncrement = () => setYear(++year);

    const handleYearDecrement = () => setYear(--year);

    const handleMonthIncrement = () => month === 11 ? (setMonth(0), handleYearIncrement()) : setMonth(month + 1);

    const handleMonthDecrement = () => month === 0 ? (setMonth(11), handleYearDecrement()) : setMonth(month - 1);

    return (
        <table className="title-table">
            <thead>
                <tr>
                    <td className="cursor-pointer" onClick={handleMonthDecrement}>&lt;</td>
                    <td className="cursor-pointer" onClick={handleYearDecrement}>&lt;&lt;</td>
                    <td>{monthNames[month]}, {year}</td>
                    <td className="cursor-pointer" onClick={handleYearIncrement}>&gt;&gt;</td>
                    <td className="cursor-pointer" onClick={handleMonthIncrement}>&gt;</td>
                </tr>
            </thead>
        </table>
    )
}

export default title;
