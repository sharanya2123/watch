// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onRestTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStarTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stop-watch">Stopwatch</h1>
          <div className="time-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                className="start-button button"
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onRestTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
