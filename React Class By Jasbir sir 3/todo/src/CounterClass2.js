import React from 'react';

class CounterClass2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 15
        }
    }

    increamentCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className='counter'>
                <button onClick={this.increamentCounter}>+</button>
                <div>{this.state.count}</div>
                <button onClick={this.decrementCounter}>-</button>
            </div>
        );
    }
}

export default CounterClass2;