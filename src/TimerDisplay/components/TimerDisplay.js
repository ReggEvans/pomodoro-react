import React from 'react';

const leftpad = (val) => {
  if(val < 10) {
    return `0${val}`
  }
  return val
}
const TimerDisplay = (props) => (
  <div className="row">
    <h1>{`${leftpad(props.currentTimer.get('minutes'))}:${leftpad(props.currentTimer.get('seconds'))}`}</h1>
  </div>
)

export default TimerDisplay
