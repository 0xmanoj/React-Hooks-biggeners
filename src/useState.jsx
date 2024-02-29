import React, { useState } from 'react';

const UseStateHOOK = () => {
    // Example 1
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };

    const [count, setcount] = useState(0);

    // Example 2
    const [inputValue, setInputValue] = useState("Manoj");
    const onChangeValue = (event) => {
       const newValue = event.target.value;
       setInputValue(newValue);
    }
    return (
        <>
            <div>
                {/* Example 1 */}
                <h3><i>UseState example 1</i></h3>
                <button onClick={decrement}>Decrement</button> {counter} <button onClick={increment} >Increment</button>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
            <h3><i>UseState example 2</i></h3>
                <input placeholder='Enter somthing' onChange={onChangeValue} />
                 {inputValue}
            </div>
        </>
    )
};

export default UseStateHOOK;
