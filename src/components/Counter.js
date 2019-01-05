import React, { Component } from "react";

class Counter extends Component {
    constructor() {
    super();

    this.state = {
      count: 0
    };

  }

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button>Decrement</button>
        <button onClick={this.increaseCount}>Decrement</button>
        <button>Increment</button>
        <button onClick={this.decreaseCount}>Increment</button>
      </div>
    );
  }

  increaseCount = () => {
    let count = this.state.count + 1;

    this.setState({
      count
    });
  }

  decreaseCount = () => {
    let count = this.state.count - 1;

    this.setState({
      count
    });
  }
}

export default Counter;