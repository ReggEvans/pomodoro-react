import React, { Component } from 'react';
import moment from 'moment'

class TimerButtons extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.stopTimer()
    let min = parseInt(e.target.value, 10);
    const newCurrentTimer = moment.duration(min, 'minutes')
    this.props.setCurrentTimer(newCurrentTimer)
    this.props.startTimer()
  }

  render ()
  {
    return (
      <div className="row button-row">
        <button className="btn btn-primary btn-timer" value={5}  onClick={this.handleChange}>5m</button>
        <button className="btn btn-primary btn-timer" value={25} onClick={this.handleChange}>25m</button>
        <button className="btn btn-primary btn-timer" value={60} onClick={this.handleChange}>60m</button>
      </div>
    )
  }
}

export default TimerButtons
