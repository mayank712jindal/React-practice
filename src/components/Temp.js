import React, { useState } from 'react'

const Temp = (props) => {
    console.log("rendered")
    // console.log(props)
    // useState
    const [name, setName] = useState(props.name);


    let nameChangeHandler = () => {
        console.log("chll to rha hai")
        let temp = prompt();
        setName(temp)
    }
    return (
        <>
            <h1>Hello {name}</h1>
            <h2>my age is {props.age}</h2>
            <button onClick={nameChangeHandler}> change message</button>
        </>

    )
}

export default Temp

// <img src="" alt="" />