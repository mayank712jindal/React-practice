import React, { useState, useContext } from 'react'

const Form = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [work, setWork] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // ************a normal approach********
        // props.setPersons([...props.persons, { name, age, work }]);

        // ************* a better approach **************
        // also here we have used the concept of "Upward Pass/Flow" i.e.
        // a function was passed from parent(PersonList.js) as a prop and the Child(Form.js) basically send the values to that function
        props.setPersons((prevState) => {
            return [...prevState, { name, age, work }];
        })

        console.log(name, age, work)
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
        </>
    )

}

export default Form