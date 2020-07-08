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
        const { daysLeft } = this.state
        const { hoursLeft } = this.state
        const { minutesLeft } = this.state
        const { secondsLeft } = this.state
        return (
            <div id="countdown-box">
                <section>
                    {this.underTen(daysLeft)}
                    <p className="text-font">days</p>
                </section>
                <p className="number-font">/</p>
                <section>
                    {this.underTen(hoursLeft)}
                    <p className="text-font">hours</p>
                </section>
                <p className="number-font">/</p>
                <section>
                    {this.underTen(minutesLeft)}
                    <p className="text-font">minutes</p>
                </section>
                <p className="number-font">/</p>
                <section>
                    {this.underTen(secondsLeft)}
                    <p className="text-font">seconds</p>
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
                clearInterval(this.myInterval)
            } else {
                this.setState({
                    daysLeft: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hoursLeft: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutesLeft: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    secondsLeft: Math.floor((diff % (1000 * 60)) / 1000),
                })
//                this.setState({
//                    daysLeft: (daysLeft < 10) ? '0' + daysLeft : daysLeft,
//                    hoursLeft: (hoursLeft < 10) ? '0' + hoursLeft : hoursLeft,
//                    minutesLeft: (minutesLeft < 10) ? '0' + minutesLeft : minutesLeft,
//                    secondsLeft: (secondsLeft < 10) ? '0' + secondsLeft : secondsLeft,
//                })
            }
        }, 900)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    underTen(name) {
        if (name < 10) {
            return (
                <p className="number-font">0{name}</p>
            )
        } else {
            return <p className="number-font">{name}</p>;
        }
    }
}

export default Countdown;