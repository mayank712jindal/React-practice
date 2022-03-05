import React, { useState } from 'react';
import Person from './Person';

const PersonList = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [work, setWork] = useState("");

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



    const formSubmitHandler = (e) => {
        e.preventDefault();
        // ************a normal approach********
        // setPersons([...persons, { name, age, work }]);

        // ************* a better approack **************
        setPersons((prevState) => {
            return [...prevState, { name, age, work }];
        })
    }

    return (
        <>
            <div>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='name'>Name : </label>
                    <input type="text" id="name" placeholder='Name'
                        onChange={e => setName(e.target.value)} /><br />

                    <label htmlFor='age'>Age : </label>
                    <input type="number" id="age" placeholder='Age'
                        onChange={e => setAge(e.target.value)} /><br />

                    <label htmlFor='work'>Work : </label>
                    <input type="text" id="work" placeholder='Work'
                        onChange={e => setWork(e.target.value)} /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>

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