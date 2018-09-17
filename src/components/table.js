import React from 'react';

export default (props) => {

    const tableRows = props.data.map((items, index) => {
        return(
            <tr key={index}>
                <td>{items.Name}</td>
                <td>{items.Course}</td>
                <td>{items.Grade}</td>
            </tr>
        )
    });
    return (
        <table className='table'>
             <thead className ='thead-inverse'>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
        </table>
        )
        }

