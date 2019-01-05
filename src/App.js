import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 5
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CounterList counter={this.props.data.counters} />
        <CounterList counter={this.state.counters} />
      </div>
    );
  }
}

export default App;