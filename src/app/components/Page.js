import React from 'react';
import Grid from './Grid';
import Result from './Result';
import '../css/style.css'
import maneko from '../css/maneki-neko.jpg';

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
        <div className="pure-u-1-6"></div>
        <div className="pure-u-4-6">
          <div className="pure-g">
            <div className="pure-u-1-5"></div>
            <div className="pure-u-3-5">
              <h1>Uncle Ang,</h1>
              <h1>新年快乐！希望您会赢! :)</h1>
            </div>
            <div className="pure-u-1-5">
              <img src={maneko} alt='icon' className="imageResize"/>
            </div>
          </div>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <Grid getCombinations={this.getCombinations}/>
            </div>
            <div className="pure-u-1-1 spacer"></div>
            <div className="pure-u-1-1">
              <Result combinations={this.state.combinations}/>
            </div>
            <div className="pure-u-1-1 spacer"></div>
          </div>
        </div>
      </div>
    )
  }
}
