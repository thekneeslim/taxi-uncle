import React from 'react';
import Row from './Row';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [['','','',''],['','','',''],['','','',''],['','','','']]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(row, column, value) {
    const grid = this.state.data.slice();
    grid[row][column] = value;
    this.setState({ data: grid }, () => console.log(`After setting :: ${grid}`))
  }

  render() {
    return (
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
    )
  }
}
