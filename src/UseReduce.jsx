import React, { useReducer } from 'react';

const UseReduceHook = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1, showtext: !state.showtext }
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showtext: true
    });
    return (
        <div>
            <i><h3>UseReducer example 1</h3></i>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                }}
            >click here</button>
            {state.showtext && <p>Text showing</p>}
        </div>
    )
}

export default UseReduceHook;
