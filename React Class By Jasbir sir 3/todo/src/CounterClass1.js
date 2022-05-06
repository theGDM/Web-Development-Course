import React from 'react';

function Button(props) {
    return (<button onClick={() => props.handleButtonClick(props.purpose)}>{props.purpose === 'inc' ? '+' : '-'}</button>);
}

class CounterClass1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleCounter(p) {
        console.log(p);
        if (p === 'inc') {
            this.setState({
                count: this.state.count + 1
            })
        } else if (p === 'dec') {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {
        return (
            <div className='counter'>
                <Button purpose="inc" handleButtonClick={(p) => this.handleCounter(p)} />
                <div>{this.state.count}</div>
                <Button purpose="dec" handleButtonClick={(p) => this.handleCounter(p)} />
            </div>
        );
    }
}

export default CounterClass1;