import React from 'react';
import Person from './Person';

const PersonList = () => {

    const persons = [
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
    ];


    return (
        <>
            {
                persons.map((data, idx) =>
                    <Person
                        name={data.name}
                        age={data.age}
                        work={data.work}
                        key={idx}
                    />

                )}
        </>
    )
}

export default PersonList;