import logo from './logo.svg';
import './App.css';
import { Button, Card, Alert } from 'react-bootstrap';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './Work.js'
import SB from './SB';
import LB from './LB';




// const RenderTime = ({ remainingTime }) => {
//   const currentTime = useRef(remainingTime);
//   const prevTime = useRef(null);
//   const isNewTimeFirstTick = useRef(false);
//   const [, setOneLastRerender] = useState(0);

//   if (currentTime.current !== remainingTime) {
//     isNewTimeFirstTick.current = true;
//     prevTime.current = currentTime.current;
//     currentTime.current = remainingTime;
//   } else {
//     isNewTimeFirstTick.current = false;
//   }

//   // force one last re-render when the time is over to trigger the last animation
//   if (remainingTime === 0) {
//     setTimeout(() => {
//       setOneLastRerender((val) => val + 1);
//     }, 10);
//     return (

//     <Alert variant='success'>
//       Your have done it!!
//     </Alert>
//     );
//   }

//   const isTimeUp = isNewTimeFirstTick.current;

//   return (
//     <div className="time-wrapper">
//       <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
//         {remainingTime}
//       </div>
//       {prevTime.current !== null && (
//         <div
//           key={prevTime.current}
//           className={`time ${!isTimeUp ? "down" : ""}`}
//         >
//           {prevTime.current}
//         </div>
//       )}
//     </div>
//   );
// };

function App() {

  // const [isOn, setIsOn] = useState(false)

  // const startClick = () => {
  //   setIsOn(true);
  //   console.log('isOn has value', isOn);
  // }
  // const stopClick = () => {
  //   setIsOn(false)
  //   console.log('isOn has value', isOn);
  // }
  return (
    // <div className="App" >

    //   {/* task1 */}
    //   <Card className="card" bg="gray" style={{
    //     width: '20rem',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }}>
    //     <Card.Body>
    //       <Card.Title style={{
    //         color: "black"
    //       }}>Task 1</Card.Title>
    //       <form className="form">
    //         <p style={{
    //           color: "black"
    //         }}>Enter your task:</p>
    //         <input
    //           type="text"
    //           className="input-task"
    //         />
    //       </form>
    //       <br />
    //       <div className="timer-wrapper">
    //         <CountdownCircleTimer
    //           isPlaying={isOn}
    //           duration={15}
    //           width={20}
    //           colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
    //         >
    //           {RenderTime}

    //         </CountdownCircleTimer>
    //       </div>
    //       <br />
    //       <Card.Text style={{
    //         color: "black"
    //       }}>
    //         Work on it for just 1500 seconds
    //       </Card.Text>
    //       <div className="two-buttons">
    //         <Button onClick={startClick} variant="primary">Start</Button>
    //         <Button onClick={stopClick} variant="outline-danger ml-3">Stop</Button>{ }
    //       </div>
    //     </Card.Body>
    //   </Card>
    <div className="App" >
      <h1 className="heading" style={{color: 'white', fontFamily:"Lucida Console"}}>POMODORO Timer</h1>
      <br/>
      <Work className="task-work"/>
      <br/>
      <SB />
      <br/>
      <Work className="task-work"/>
      <br/>
      <SB />
      <br/>
      <Work className="task-work"/>
      <br/>
      <SB />
      <br/>
      <Work className="task-work"/>
      <br/>
      <SB />
      <br/>
      <LB />




    </div>
  );
}

export default App;
