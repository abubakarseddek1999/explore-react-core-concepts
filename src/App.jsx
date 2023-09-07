import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Todo task='Learn React'isDone={true} ></Todo>
      <Todo task='Explore Core concepts' isDone={false} ></Todo>
      <Todo task='Try JSX' isDone={true} ></Todo>
      {/* <Device name='Laptop' price="55"></Device>
      <Device name='mobile' price='550'></Device>
      <Device name='watch' price="350"></Device>
      <Device></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='7' score='99'></Student>
      <Student grade='7'></Student>
      <Developer></Developer> */}
     
    </>
  )
}
function Person(){
  const age =53;
  return <h3> I am a person: {age} </h3>
}
const {grade, score} ={grade:'7', score:'99'};

function Student ({grade=1, score=0}) {
  console.log(grade, score)
  return (
  <div className='student'>
    <h3> This is a student</h3>
    <p>class:{grade} </p>
    <p>score:{score} </p>
  </div>
  )
}
function Device(props){
  // console.log(props);
  return <h2>This device:{props.name}  , price:{props.price} </h2>
}

function Developer(){
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return <div style={developerStyle}>
    <h5>Devo Devo</h5>
    <p>Coding</p>
  </div>
  
}

export default App
