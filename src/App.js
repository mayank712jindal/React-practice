import React, { createContext, useState } from 'react';
import './App.css';
import Card from './components/Card';
import PersonList from './components/PersonList'
// import Clock from './components/Clock'
// import CustomHooks from './components/CustomHooks';
// import Movies from './components/Movies';
import Temp from './components/Temp';

export const UserContext = createContext("Mayank123456")
const App = () => {

  const [name, setName] = useState("MayankJindadsdsdl");

  return (
    <>
      {/* <UserContext.Provider value={name}>
        <PersonList value={name} />
      </UserContext.Provider> */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {/* <Temp name="Mayank" age="20" />
      <Temp name="Jindal" age="21" /> */}

      <PersonList />
    </>

  )
}

// const PI = 3.142;
// const arr = ['hello', 'by'];
// // console.log(arr);

// function Hello() {
//   return (
//     <>
//       <h1> Hello from the Hello Function</h1>
//       <p> YEah it is what it is</p>
//       {arr}
//     </>
//   )
// }

export default App;
