import React, { useState } from 'react'

const Temp = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name, email)
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='enter your name'
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" placeholder='enter email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input type="submit" value="submit" />
            </form>
        </>

    )
}

export default Temp

// <img src="" alt="" />