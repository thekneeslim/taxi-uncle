import React from 'react';
import Grid from './Grid';
import Result from './Result';

export default class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      combinations: []
    }
    this.getCombinations = this.getCombinations.bind(this);
  }

  getCombinations(combinations) {
    this.setState({ combinations });
  }

  render() {
    return(
      <div className="pure-g">
        <Grid getCombinations={this.getCombinations}/>
        <Result combinations={this.state.combinations}/>
      </div>
    )
  }
}
