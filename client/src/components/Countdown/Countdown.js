import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {

    constructor() {
        super();
        this.state = {
            daysLeft: 0,
            hoursLeft: 0,
            minutesLeft: 0,
            secondsLeft: 0,
        };
      }

    render() {
        const {daysLeft} = this.state
        const {hoursLeft} = this.state
        const {minutesLeft} = this.state
        const {secondsLeft} = this.state
        return (
            <div>
                <section>
                    <p>{daysLeft}</p>
                    <p><small>days</small></p>
                </section>
                <p>/</p>
                <section>
                    <p>{hoursLeft}</p>
                    <p><small>hours</small></p>
                </section>
                <p>/</p>
                <section>
                    <p>{minutesLeft}</p>
                    <p><small>minutes</small></p>
                </section>
                <p>/</p>
                <section>
                    <p>{secondsLeft}</p>
                    <p><small>seconds</small></p>
                </section>
            </div>
        );
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            //Change the date to the actual event
            const diff = new Date('July 15, 2020 00:00:00').getTime() - new Date().getTime();
            if (diff <= 0) {
                this.setState({
                    daysLeft: 0,
                    hoursLeft: 0,
                    minutesLeft: 0,
                    secondsLeft: 0,
                })
            } else {
                this.setState({
                    daysLeft: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hoursLeft: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutesLeft: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    secondsLeft: Math.floor((diff % (1000 * 60)) / 1000),
                })
            }
        }, 900)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}

export default Countdown;