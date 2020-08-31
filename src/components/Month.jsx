import React, { useState, useEffect } from 'react';

const Month = ({ startDayOfMonth, totalDays, month, year }) => {

    const [rows, setRows] = useState("");

    useEffect(() => {

        const checkCurrentDay = (i) => {
            return month === new Date().getMonth() && year === new Date().getFullYear() && i === new Date().getDate();
        }

        //function loads days into days array
        let dateCounter = 1;
        let days = [];
        //insert empty string first to skip start days
        for (let i = 0; i < startDayOfMonth + totalDays; i++) {
            if (i < startDayOfMonth && startDayOfMonth !== 0) {
                days.push("");
            } else {
                days.push(dateCounter);
                dateCounter++;
            }
        }

        let tempRows = "<tr>";
        //generate rows of the array for the table
        for (let i = 0; i < days.length; i++) {
            if (i % 7 === 0 && i !== 0) {
                tempRows += "</tr><tr>";
            }

            if (days[i] === "") {
                tempRows += "<td></td>";
            } else {
                if (i % 7 === 0 || i % 7 === 6) {
                    if (checkCurrentDay(days[i])) {
                        tempRows += "<td class='weekend-color current-date date-field'>" + days[i] + "</td>";
                    } else {
                        tempRows += "<td class='weekend-color date-field'>" + days[i] + "</td>";
                    }
                } else {
                    if (checkCurrentDay(days[i])) {
                        tempRows += "<td class='current-date date-field'>" + days[i] + "</td>";
                    } else {
                        tempRows += "<td class='date-field'>" + days[i] + "</td>";
                    }
                }
            }
        }

        tempRows += "</tr>";
        setRows(tempRows);
    }, [startDayOfMonth, totalDays, setRows, month, year]);

    return (
        <table className="month-table">
            <thead>
                <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: rows }}>
            </tbody>
        </table>
    );
}

export default Month;