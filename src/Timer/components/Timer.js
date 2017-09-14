import React, { Component } from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerEvents from '../../TimerEvents/components/TimerEvents';
import TimerButtons from '../../TimerButtons/components/TimerButtons';

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      currentTimer: moment.duration(0, 'minutes'),
      timer: null,
      timerStatus: 0,
      isZero: true
    }
    this.setCurrentTimer = this.setCurrentTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.reduceTimer = this.reduceTimer.bind(this)
  }

  setCurrentTimer(newCurrentTimer) {

    this.setState({
      currentTimer: newCurrentTimer
    })
  }

  startTimer() {

    this.setState({
      timer: setInterval(this.reduceTimer, 1000),
    })
  }

  stopTimer() {
    clearInterval(this.state.timer)

    this.setState({
      timerStatus: 0
    })
  }

  reduceTimer() {
    let newTimer = moment.duration(this.state.currentTimer)
    newTimer.subtract(1, 'second')

    this.setState({
      currentTimer: newTimer,
      timerStatus: 1,
      isZero: false
    })
  }

  render ()
  {
    return (
      <div className="container-fluid">
        <TimerHeader />
        <TimerDisplay
          currentTimer={this.state.currentTimer}/>
        <TimerEvents
          stopTimer={this.stopTimer}
          startTimer={this.startTimer}
          timerStatus={this.state.timerStatus}
          isZero={this.state.isZero}/>
        <TimerButtons
          setCurrentTimer={this.setCurrentTimer}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}/>
      </div>
    )
  }
}

export default Timer
