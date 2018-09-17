
import React from 'react';
import Table from './table';


const students = [
    {
        Name : 'Chase',
        Course: 'Science',
        Garde: 65
    },
    {
        Name: 'Sean',
        Course: 'English',
        Grade: 95
    },
    {
        Name: 'Kareem',
        Course: 'Engineering',
        Grade: 0
    },
]

export default () => {
    return(
   <div className="container">
   <h1>Student Grade Table</h1>
   <Table data={students}/>
   </div>
    )
}