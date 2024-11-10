import React, { useState } from 'react';
import { Example } from './Example';
export class App extends React.Component {
  state = {
    value: '!!',
    count: 0
  }

  updateCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  updateValue = (event) => {
    this.setState({ value: event.target.value });
  };    

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    console.log('render');
    return (
      <div>
        rendered!
        {this.state.value}
        <input type="text" onChange={this.updateValue} />
        <Example value={this.state.value} count={this.state.count} />
      </div>
    );
  }
}

export default App;