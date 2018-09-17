import React from 'react';
import ReactDOM from 'react-dom';



function luckyNumber(){
    let luckyNumber = Math.ceil(Math.random()*1000)
    return luckyNumber;
}

function greeting(user){
    return <h1 class='container' >
        <h1>greeting's to you {user.name}</h1>
        <h2 class='text-muted' >your lucky number is {user.luckyNumber} </h2>
    </h1>
}


var user = {
    name:'chase',
    luckyNumber: luckyNumber()
}


ReactDOM.render(
   greeting(user),
    document.getElementById('root')
);

