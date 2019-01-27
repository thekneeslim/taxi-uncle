import React from 'react';
import Row from './Row';
import { isFilled } from '../utils/Utils';
import Combination from '../utils/Combination';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [['','','',''],['','','',''],['','','',''],['','','','']]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(row, column, value) {
    let combinations = [];
    const grid = this.state.data.slice();
    grid[row][column] = value;
    this.setState({ data: grid })
    if (isFilled(this.state.data)) {
      const combinationUtils = new Combination(this.state.data, 4)
      combinations = combinationUtils.getCombinations()
    }
    this.props.getCombinations(combinations);
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-5"></div>
        <div className="pure-u-3-5">
          <table className="pure-table pure-table-bordered">
            <tbody>
              {
                this.state.data.map((row, rowIndex) => {
                  return <Row field={row}
                    handleChange={(e, i) => this.handleChange(rowIndex, i, e.target.value)}
                    rowIndex={rowIndex}
                    key={rowIndex}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
