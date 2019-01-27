import React from 'react';

export default class Result extends React.Component {

  displayMessage() {
    return <p>Please fill in the grid completely</p>;
  }

  displayCombinations() {
    return this.props.combinations.map((combination, index) => {
      return (
        <div className="pure-u-1-8" key={index}>
          <p>{combination}</p>
        </div>
      )
    })
  }

  displayResult() {
    return (
      <div className="pure-u-1-1">
        <div className="pure-u-1-1">
          <h3>Results:</h3>
        </div>
        <div className="pure-g">
          {this.displayCombinations()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="pure-u-1-1">
        {this.props.combinations.length === 0 ? this.displayMessage() : this.displayResult()}
      </div>
    )
  }

}
