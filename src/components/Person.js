import React, { useContext, useState } from 'react'
import { UserContext } from '../App';
import './Person.css'

const Person = (props) => {

    // props.name = "anonymous";      --->>> props are immutable in react

    // React Hook --> useState
    // const[varName, changeValueFunc] = useState(initial value to set)
    const [name, setName] = useState(props.name);
    const nameChangeHandler = (event) => {
        let newName = prompt("Enter name", name)
        setName(newName)
    }

    const userContext123 = useContext(UserContext);

    return (

        <>
            <div className="card">
                {/* <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="avatar" style={{ width: "100%" }} /> */}
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{props.age}</p>
                    <p>{props.work}</p>
                    <button onClick={nameChangeHandler}>Change name</button>
                </div>
            </div>
            {/* {
                <h1>{userContext123}</h1>
            } */}

        </>

    )
}

export default Person