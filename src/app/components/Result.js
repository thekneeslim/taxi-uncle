import React from 'react';

export default class Result extends React.Component {

  displayMessage() {
    return (
      <div className="pure-u-1-1">
        <p>您需要把它填满！</p>
        <p>Please fill in the boxes!</p>
      </div>
    )
  }

  displayCombinations() {
    const combinations = this.props.combinations.map((combination, index) => {
      return (
        <div className="pure-u-1-8" key={index}>
          <p>{combination}</p>
        </div>
      )
    })
    return <div className="pure-g">{combinations}</div>
  }

  displayResult() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div>
            <h3>Results:</h3>
          </div>
          <div className="pure-g">
            {this.displayCombinations()}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-5"></div>
        <div className="pure-u-3-5 border">
            {this.props.combinations.length === 0 ? this.displayMessage() : this.displayResult()}
        </div>
      </div>
    )
  }

}
