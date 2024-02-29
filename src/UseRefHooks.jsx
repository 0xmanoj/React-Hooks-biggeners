import React, { useRef, useState } from 'react'

const UseRefHooks = () => {

    const inputRef = useRef(null);
    const [display, setdisplay] = useState("Hello");

    const onClick = () => {
        setdisplay(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();

    };
    return (
        <div>
            <i><h3>Use Ref HOOK</h3></i>
            <br />
            <br />
            <br />
            <h1>{display}</h1>
            <input type="text" placeholder='Ex..' ref={inputRef} />
            <button onClick={onClick}>Change me</button>
            <br />
            <br />
            <br />
        </div>
    )
}

export default UseRefHooks;
