import React from 'react';
import TempClock from './TempClock'

class Clock extends React.Component {


    // *************************************************************************************************************
    // the mounting stages 
    // ***********************************************************************************************************

    // called first always
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 1,
            a: () => {
                return this.state.date.toTimeString()
            },
            name: "anonymous",
            show: true
        }

    }

    // called immediate after the constructor
    static getDerivedStateFromProps(props, state) {
        return { name: props.name };
    }

    unmountClock = () => {
        this.setState(prevState => ({ show: !prevState.show }));
        // console.log(this.state.prevSt)
    }


    // called after the getDerivedStateFromProps method
    render() {
        let tempClock;
        if (this.state.show)
            tempClock = <TempClock />;

        return (
            <>
                <h1>the count of variable is {this.state.count}</h1>
                <h1>the name of person is {this.state.name}</h1>
                <h1>{this.state.a()}</h1>
                <button onClick={this.unmountClock}>Change count</button>
                {tempClock}
                {/* {console.log(tempClock)} */}

            </>
        )
    }

    // called when the component gets mounted and the value has to be altered
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                date: new Date()
            })
        }, 1000)
    }

    // *************************************************************************************************************
    // the updating stages 
    // ***********************************************************************************************************

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log(prevState.a())
    }

    componentDidUpdate() {
        // console.log("yes")
    }
}


export default Clock;