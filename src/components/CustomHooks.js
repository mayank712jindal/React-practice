import React from 'react'
import useToggle from '../hooks/useToggle';

const CustomHooks = () => {
    const [state, toggle] = useToggle(true);
    const [mood, toggleMood] = useToggle(true);

    return (
        <>
            <div onClick={toggle}>{state ? "hello ji" : "Hi ji"}</div>
            <h1 onClick={toggleMood}>{mood ? "❤" : '💕'}</h1>
        </>
    )
}

export default CustomHooks