import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="card">
            {/* <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="avatar" style={{ width: "100%" }} /> */}
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.age}</p>
                <p>{props.work}</p>
            </div>
        </div>
    )
}

export default Person