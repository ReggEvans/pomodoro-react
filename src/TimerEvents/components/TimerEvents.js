import React, { Component } from 'react';

class TimerEvents extends Component {
  constructor() {
    super()
    this.handleStop = this.handleStop.bind(this)
    this.handleResume = this.handleResume.bind(this)
  }

  handleStop() {
    this.props.stopTimer()
  }

  handleResume() {
    if(this.props.timerStatus === 0 && !this.props.isZero){
      this.props.startTimer()
    }
  }

  render ()
  {
    return (
      <div className="row button-row">
        <button className="btn btn-danger btn-event" onClick={this.handleStop}>STOP</button>
        <button className="btn btn-success btn-event" onClick={this.handleResume}>RESUME</button>
      </div>
    )
  }
}

export default TimerEvents
