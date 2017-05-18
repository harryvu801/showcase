import React, { Component } from 'react'

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }

  }

  handleChange (val) {
    this.setState({userInput:val})
  }

  assignEvensAndOdds() {
    var evens = [];
    var odds = [];
    this.state.userInput.split(',').map(x => (parseInt(x)%2 === 0) ? evens.push(parseInt(x)) : odds.push(parseInt(x)) );
    this.setState({evenArray:evens, oddArray:odds})
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={(e)=> this.assignEvensAndOdds()}>Split</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

export default EvenAndOdd
