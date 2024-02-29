import React, { useLayoutEffect, useEffect, useRef } from 'react';

const UseLayoutHook = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])
    useEffect(() => {
        inputRef.current.value = "Hello";
    }, [])

    return (
        <div className="App">
            <input ref={inputRef} value="manu" style={{width: 300,height: 200 ,border: 2}} />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default UseLayoutHook;
