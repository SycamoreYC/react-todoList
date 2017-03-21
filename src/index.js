import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ToDoBox from './ToDoBox/ToDoBox';
import './index.css';

ReactDOM.render(
  <ToDoBox />,
  document.getElementById('root')
);



// function Square(props) {
//     return (
//         <button onClick={() => props.onClick()}>
//             {props.value}
//         </button>
//     );
// }
// class Board extends React.Component {
//
//     renderSquares(i) {
//         return (
//             <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     {this.renderSquares(0)}
//                     {this.renderSquares(1)}
//                     {this.renderSquares(2)}
//                 </div>
//                 <div>
//                     {this.renderSquares(3)}
//                     {this.renderSquares(4)}
//                     {this.renderSquares(5)}
//                 </div>
//                 <div>
//                     {this.renderSquares(6)}
//                     {this.renderSquares(7)}
//                     {this.renderSquares(8)}
//                 </div>
//             </div>
//         )
//     }
// }
//
//
// class Game extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             history : [{
//                 squares: Array(9).fill(null)
//             }],
//             stepNumber: 0,
//             xIsNext: true
//         }
//     }
//
//     handleClick(i) {
//         var history = this.state.history.slice(0, this.state.stepNumber + 1);
//         var current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             history: history.concat([{
//                 squares: squares
//             }]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         })
//     }
//
//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) ? false : true,
//         });
//     }
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);
//
//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
//         }
//
//         const moves = history.map((step, move) => {
//             const desc = move ? 'move #' + move : 'Game start';
//             return (
//                 <li key={move}>
//                     <a href="#" onClick={() => this.jumpTo(move)}>
//                         {desc}
//                     </a>
//                 </li>
//             );
//         });
//
//
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current.squares}
//                         onClick={(i) => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }
