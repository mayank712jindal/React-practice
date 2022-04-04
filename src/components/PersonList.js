import React, { useState } from 'react';
import Person from './Person';
import Form from './Form';

const PersonList = (props) => {

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
        {
            name: "anjali",
            age: 20,
            work: "developer"
        },
        {
            name: "Sezal",
            age: 20,
            work: "programmer"
        },

    ]);


    return (
        <>
            <Form setPersons={setPersons} />

            {
                persons.map((data) =>
                    <Person
                        name={data.name}
                        age={data.age}
                        work={data.work}
                    // key={idx}
                    />)
            }
        </>
    )
}

export default PersonList;