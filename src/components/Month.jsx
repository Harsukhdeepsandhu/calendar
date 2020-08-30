import React, { useState, useEffect } from 'react';

const Month = ({ days, setDays, startDayOfMonth, setStartDayOfMonth, month, setMonth, year, setYear, totalDays, setTotalDays }) => {

    const [rows, setRows] = useState("");

    useEffect(() => {
        //function loads days into days array
        const loadDays = () => {
            let dateCounter = 1;
            let temp = [];
            //insert empty string first to skip start days
            for (let i = 0; i < startDayOfMonth + totalDays; i++) {
                if (i < startDayOfMonth && startDayOfMonth !== 0) {
                    temp.push(" ");
                } else {
                    temp.push(dateCounter);
                    dateCounter++;
                }
            }
            setDays(temp);

            let tempRows = "<tr>";
            //generate rows of the array for the table
            for (let i = 0; i < temp.length; i++) {
                if ((i) % 7 === 0) {
                    tempRows += "</tr><tr><td>";
                    tempRows += temp[i];
                    tempRows += "</td>";
                } else {
                    tempRows += "<td>";
                    tempRows += temp[i];
                    tempRows += "</td>";
                }
            }

            tempRows += "</tr>";
            setRows(tempRows);
        }
        loadDays();
    }, [startDayOfMonth, totalDays, setDays, setRows, month]);

    return (
        <table>
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