import React, { useState } from 'react';
import './App.css';

// Pad time function uses the padStart method to ensure that the timer has 2 digits for minutes and seconds.
function padTime(time) {
  return time.toString().padStart(2, "0")
};


export default function App() {
  //state variables used to set title and time left
const [title, setTitle] = useState('Let the countdown begin!!!')
const [timeLeft, setTimeLeft] = useState(25 * 60);

function startTimer(){

};
  //minute and second variables 
const minutes = padTime(Math.floor(timeLeft / 60));
const seconds = padTime((timeLeft - minutes * 60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
