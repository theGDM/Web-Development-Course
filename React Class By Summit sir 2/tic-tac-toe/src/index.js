import ReactDom from 'react-dom';
import React from 'react';
import './style.css';

function getGameStatus(squares) {
    //winning combination
    let winCombs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 8]
    ];

    for (let i = 0; i < winCombs.length; ++i) {
        let winComb = winCombs[i];
        let s1 = winComb[0];
        let s2 = winComb[1];
        let s3 = winComb[2];

        if (squares[s1] != null && squares[s1] == squares[s2] && squares[s2] == squares[s3]) {
            return squares[s1];
        }
    }

    return null;
}

//board component
class Board extends React.Component {
    renderSquare(i) {
        return (
            <button onClick={() => this.handleBoxClick(i)}>{this.props.boxes[i] == null ? "" : this.props.boxes[i]}</button>
        )
    }

    handleBoxClick(i) {
        this.props.handlerForBoxClick(i);
        //children component se parent component tak khabar pahuchane ka tarika
    }

    render() {
        return (
            <div className='board'>
                <div className='title'>
                    Tic Tac Toe
                </div>
                <div className='content'>
                    <div className='ttt'>
                        <div className='row'>
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>
                        <div className='row'>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className='row'>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Display/History component
class Display extends React.Component {
    moveHistory(i) {
        this.props.handlerForHistory(i);
    }

    render() {
        let gameTitle = null;
        if (this.props.gameStatus != null) {
            if (this.props.gameStatus === "draw") {
                gameTitle = "It's a Draw!";
            } else {
                gameTitle = this.props.gameStatus + " Wins!";
            }
        } else { //in case of null
            if (this.props.stepNumber % 2 == 0) {
                gameTitle = "Next move for X"; //even for x
            } else {
                gameTitle = "Next move for O"; //odd for o
            }
        }

        let buttons = [];
        for (let i = 0; i <= this.props.stepNumber; ++i) {
            let button = null;

            if (i == 0) {
                //the i in the function is the i of for loop not the local parameter
                button = (<button key={i} onClick={() => this.moveHistory(i)}>Go to Start</button>);
            } else {
                button = (<button key={i} onClick={() => this.moveHistory(i)}>Go to Step #{i}</ button>);
            }

            buttons.push(button);
        }

        //we have 5 status
        //Next move for X, Next move for Y, X wins, Y wins, Draw
        return (
            <div className='display'>
                <div className='title'>
                    {gameTitle}
                </div>
                <div className='content'>
                    <div className='history'>
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
}

//this is our class component
//it represents the whole page(parent component)
class TTT extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //initially saare boxes me null pada hai
            history: [
                [null, null, null, null, null, null, null, null, null],
            ],
            stepNumber: 0,
            gameStatus: null //if it is null, that means game is running
            //it can have three status X wins, O wins, draw
        }
    }

    handleSquareClick(i) {
        //copy of history
        let oldHistory = this.state.history.slice(); //purani history ki copy
        // oldHistory = [null, null, null, null, null, null, null, null, null],
        // ["X", null, null, null, null, null, null, null, null],
        // ["X", null, null, "O", null, null, null, null, null]

        let lastStateOfSquares = oldHistory[oldHistory.length - 1].slice();
        // lastStateOfSquares = ["X", null, null, "O", null, null, null, null, null]

        //as we just want to update the each cell only once
        if (lastStateOfSquares[i] != null || this.state.gameStatus != null) {
            return;
        }

        lastStateOfSquares[i] = this.state.stepNumber % 2 == 0 ? 'X' : 'O';// if i = 4, lastStateOfSquares = ["X", null, null, "O", "X", null, null, null, null]
        oldHistory.push(lastStateOfSquares);

        let newGameStatus = getGameStatus(lastStateOfSquares);

        //draw case
        if (this.state.stepNumber == 8 && newGameStatus == null) {
            newGameStatus = "draw"
        }

        this.setState({ //data get rendered as soon as we update via setState
            history: oldHistory,
            stepNumber: this.state.stepNumber + 1,
            gameStatus: newGameStatus
        })
    }

    moveToStep(i) {
        let oldHistory = this.state.history.slice(0, i + 1);
        let lastStateOfSquares = oldHistory[oldHistory.length - 1].slice();
        let newGameStatus = getGameStatus(lastStateOfSquares);

        this.setState({
            history: oldHistory,
            stepNumber: i,
            gameStatus: newGameStatus
        });
    }

    //this is called JSX
    render() {
        let squares = this.state.history[this.state.history.length - 1];

        return (
            <>
                <Board handlerForBoxClick={(i) => this.handleSquareClick(i)} boxes={squares} />
                {/* to board component ke ander yeh this.props.boxes me milega */}
                {/* handlerSquareClick ko uper handlerForBoxClick ke naam/roop se bheja */}
                <Display handlerForHistory={(i) => this.moveToStep(i)} stepNumber={this.state.stepNumber} gameStatus={this.state.gameStatus} />
            </>
        )
    }
}

ReactDom.render(<TTT />, document.getElementById("root"));
