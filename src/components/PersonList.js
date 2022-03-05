import React, { useState } from 'react';
import Person from './Person';
import Form from './Form';

const PersonList = () => {

    const [persons, setPersons] = useState([
        {
            name: "Mayank",
            age: 20,
            work: "entreprenuer"
        },
        {
            name: "Neeraj",
            age: 20,
            work: "engineer"
        },
        {
            name: "Rakshit",
            age: 20,
            work: "business"
        },
    ]);

    return (
        <>
            <Form setPerson={setPersons}/>
            {
                persons.map((data, idx) =>
                    <Person
                        name={data.name}
                        age={data.age}
                        work={data.work}
                        key={idx}
                    />)
            }
        </>
    )
}

export default PersonList;