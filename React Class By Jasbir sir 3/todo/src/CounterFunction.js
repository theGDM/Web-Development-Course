import React from 'react';
import { useState } from 'react';

//rendering the content
function CounterFunction() {
    //count -> state variable 
    //updateCount -> method to update count state variable
    //useState(x) -> used to give initial value to count state variable equal to some x
    let [count, updateCount] = useState(10);

    const increamentCounter = () => {
        updateCount(count + 1);
    }

    const decrementCounter = () => {
        updateCount(count - 1);
    }

    return (
        <div className='counter'>
            <button onClick={increamentCounter}>+</button>
            <div>{count}</div>
            <button onClick={decrementCounter}>-</button>
            <p></p>
        </div>
    )
}

export default CounterFunction;