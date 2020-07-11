import './chess.css'
import React from 'react'

function Square(props) {
  let coordinate
  let isHigh = false
  if (props.value) {
    coordinate = <div className="text">({Math.floor(props.coordinate/3)}, {props.coordinate%3})</div>
    isHigh = props.winData && props.winData.position.includes(props.coordinate)
  } else {
    coordinate = ''
  }
  return (
    <div className={"square" + (isHigh ? ' highLight' : '')} onClick={props.onClick}>
      <div className="value">{props.value}</div>
      {coordinate}
    </div>
  )
}

class Board extends React.Component {
  
  renderSquare(i) {
    return (
      <Square
        key={i}
        coordinate={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winData={this.props.winData}
      />
    )
  }

  render() {
    let arr = Array(3).fill(null)
    let listItem = arr.map((item, index) => {
      return (
        <div className="board-row" key={index}>
          {
            arr.map((sub, idx) => {
              return (
                this.renderSquare(index * 3 + idx)
              )
            })
          }
        </div>
      )
    })
    return (
      <div>
        {listItem}
      </div>
    )
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      sortRule: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = this.state.history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  // 升序降序
  sortRecord (flag) {
    if (flag === this.state.sortRule) return
    this.setState({
      sortRule: flag
    })
  }

  render() {
    const history = this.state.history.slice()
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    let moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start'
      return (
        <li key={move} className={this.state.stepNumber === move ? 'blob' : ''}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    if (!this.state.sortRule) {
      moves = moves.reverse()
    }
    let status
    if (winner) {
      status = 'Winner: ' + winner.name
    } else {
      if (this.state.stepNumber === 9) {
        status = `平局`
      } else {
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
      }
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.handleClick(i)}
            squares={current.squares}
            winData={winner}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <button onClick={() => this.sortRecord(true)}>升序</button>
          <button onClick={() => this.sortRecord(false)}>降序</button>
        </div>
      </div>
    )
  }

}

export default Game

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        name: squares[a],
        position: lines[i]
      }
    }
  }
  return null
}
