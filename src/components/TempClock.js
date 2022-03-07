import React, { Component } from 'react'

export class TempClock extends Component {
    render() {
        return (
            <h2>
                Hello ji! I'm a temporary clock
            </h2>
        )
    }

    componentWillUnmount() {
        console.log("I'm about to get Unmounted")
    }
    componentDidMount() {
        console.log("'I'm mounted onto the DOM")
    }
}

export default TempClock