import React, { useEffect } from 'react'
import useToggle from '../hooks/useToggle';

const CustomHooks = () => {
    const [state, toggle] = useToggle(true);
    const [mood, toggleMood] = useToggle(true);

    useEffect(() => {
        console.log("dom updated")
    },[state,mood])

    return (
        <>
            <div onClick={toggle}>{state ? "hello ji" : "Hi ji"}</div>
            <h1 onClick={toggleMood}>{mood ? "❤" : '💕'}</h1>
        </>
    )
}

export default CustomHooks