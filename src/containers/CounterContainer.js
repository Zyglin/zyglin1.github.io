
import React from 'react';
import Counter from '../views/Counter';

export class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleReset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const props = {
      handleDecrement: this.handleDecrement,
      handleIncrement: this.handleIncrement,
      handleReset: this.handleReset,
      count: this.state.count,
    };
    return <Counter {...props} />;
  }
}

export default CounterContainer;
