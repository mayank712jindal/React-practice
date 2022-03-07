import React from 'react';

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
            name: "anonymous"
        }
    }

    // called immediate after the constructor
    static getDerivedStateFromProps(props, state) {
        return { name: props.name };
    }

    // called after the getDerivedStateFromProps method
    render() {
        return (
            <>
                <h1>the count of variable is {this.state.count}</h1>
                <h1>the name of person is {this.state.name}</h1>
                <h1>{this.state.a()}</h1>
                {/* <button onClick={this.changeCountValue}>Change count</button> */}
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
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.a())
    }

    componentDidUpdate() {
        // console.log("yes")
    }
}

// *************************************************************************************************************
// the unmounting stages stages 
// ***********************************************************************************************************

export default Clock;