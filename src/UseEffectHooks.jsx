import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectHooks = () => {
    const [data, setdata] = useState("");
    const [count, setcount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setdata(response.data[200].email);
            console.log("api called");
        });
    }, [count])





    return (
        <>
            <div>
                <i><h3>Use EFFECT HOOK</h3></i>
                <br />
                <br />
                <br />
                <h2>Hello,{data}</h2>
                <h2>{count} </h2>
                <button
                    onClick={() => {
                        setcount(count + 1)
                    }}
                >
                    click
                </button>
            </div>
        </>
    )
}

export default UseEffectHooks;
