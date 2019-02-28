import React, { Component } from 'react';
import '../Style/App.css';

class AnalogClock extends Component {
    constructor(props) {
        super(props);
        this.handleClock = this.handleClock.bind(this)
        // get current time
        var date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        this.state={
            seconds,
            minutes,
            hours,
        }
    }

    handleClock() {
        var date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        this.setState({
            seconds,
            minutes,
            hours,
        })

    }

    componentDidMount() {
        var intervalId = setInterval(this.handleClock, 1000);
        this.setState({intervalId: intervalId});
    }

  render() {
      const {hours, minutes, seconds} = this.state;
      let hourPositions = hours * 360/12 + ((minutes * 360/60)/12);
      let minutePositions = (minutes * 360/60) + ((seconds * 360/60)/60);
      let secondPositions = seconds * 360/60;

        // I print only the current state
    return (
        <div className="numbers">
          <p className="twelve">12</p>
          <p className="one">1</p>
          <p className="two">2</p>
          <p className="tree">3</p>
          <p className="four">4</p>
          <p className="five">5</p>
          <p className="six">6</p>
          <p className="seven">7</p>
          <p className="eight">8</p>
          <p className="nine">9</p>
          <p className="then">10</p>
          <p className="eleven">11</p>

          <div className="clockbox">
            <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
              <circle className="mid-circle" cx="300" cy="300" r="16.2"/>
              <g id="hour" style={{
                  transform: "rotate(" + hourPositions + "deg)",
              }}>
                <path className="hour-arm" d="M300.5 298V142"/>
                <circle className="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>
              <g id="minute" style={{
                  transform: "rotate(" + minutePositions + "deg)",
              }}>
                <path className="minute-arm" d="M300.5 298V50"/>
                <circle className="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>
              <g id="second" style={{
                  transform: "rotate(" + secondPositions + "deg)",
              }}>
                <path className="second-arm" d="M300.5 350V27"/>
                <circle className="sizing-box" cx="300" cy="300" r="253.9"/>
              </g>

            </svg>
          </div>
        </div>
    );
  }
}

export default AnalogClock;
