import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({count: current.count+1}))
    console.log("count : " + this.state.count)
  };

  reduce = () => {
    this.setState(current => ({count: current.count-1}))
    console.log("count : " + this.state.count)
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.reduce}>reduce</button>
      </div>
    )
  }
}

export default App;
