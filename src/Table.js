import React from 'react'
import './Table.css';
import numeral from 'numeral';

function Table({ countries}) {
    return (
        <div className="table">
            <h3>Total Cases By Country</h3>
            {countries.map (({country , cases}) => (
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong>{numeral(cases).format("0,0")}</strong>
                    </td>
                </tr> 
            ))}
        </div>
    )
}

export default Table
