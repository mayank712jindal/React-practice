import React from 'react';
import './Card.css';


const Card = () => {

  function getName() {
    const name = ['Mayank', 'atul', 'neeraj', 'rakshit', 'sohit', 'ishan'];

    return name[Math.floor(Math.random() * name.length)];
  }

  const randomNumber = Math.floor(Math.random() * 10);

  // ***********using if-else in react**************
  // let displayItem = null;
  // if (randomNumber <= 5)
  //   displayItem = <img src="https://i.pinimg.com/originals/6e/77/7c/6e777c97b311ef5b3f3059551f338153.gif" alt="gif" style={{ width: "10vw", }} />;
  // else
  //   displayItem = <p>try again bitch!!</p>


  // ***************returning the default element******************
  return (
    <div className='parentCard'>
      <h1> Random Number is {randomNumber}</h1>
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4><b>{getName()}</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>

      {/* ************Conditional Rendering**************** */}
      {/* <div>
        {randomNumber <= 5 ? 
        <img src="https://i.pinimg.com/originals/6e/77/7c/6e777c97b311ef5b3f3059551f338153.gif" alt="gif" style={{ width: "10vw", }} /> : 
        <p>try again bitch!!</p>}
      </div> */}


      {/* ***************Rendering using if-else****************** */}
      {/* <div>
        {displayItem}
      </div> */}

      {/* ************************Third way using && and || operator *********************** */}
      <div>
        {
          (randomNumber <= 5 &&
            <img src="https://i.pinimg.com/originals/6e/77/7c/6e777c97b311ef5b3f3059551f338153.gif" alt="gif" style={{ width: "10vw" }} />) ||
          <p>trying again bitch!!</p>


        }
      </div>

    </div>
  )
}

export default Card