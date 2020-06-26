import React, { useState, useRef} from 'react';
import './App.css';

// Pad time helper function uses the padStart method to ensure that the timer has 2 digits for minutes and seconds.
function padTime(time) {
  return time.toString().padStart(2, "0")
};


export default function App() {
  //state variables used to set title and time left
const [title, setTitle] = useState('Let the countdown begin!!!')
const [timeLeft, setTimeLeft] = useState(25 * 60);
const intervalRef = useRef(null);
const [isRunning, setIsRunning] = useState(false);

function startTimer(){
  setIsRunning(true);
  if(intervalRef.current !== null) return;

  setTitle(`You're doing great!`)
 intervalRef.current = setInterval(() => {
    setTimeLeft(timeLeft => {

      if(timeLeft >= 1) {
        return timeLeft - 1
      }
      //reset timer here
      resetTimer();
      return 0;
    })
  }, 1000)
};
  //stop timer function
function stopTimer(){
  setIsRunning(false);
  if(intervalRef.current === null) return;
  clearInterval(intervalRef.current);
  setTitle('Keep it up!');
};
  //reset timer function
function resetTimer(){
  clearInterval(intervalRef.current);
  setTitle('Ready to go another round?');
  setTimeLeft(25 * 60);
  setIsRunning(false);
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
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
