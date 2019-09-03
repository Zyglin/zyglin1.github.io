import React from 'react';
import CountCounter from '../views/Counter/countIndex';

class CountCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
    this.handleDecrementCounter = this.handleDecrementCounter.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);
    this.state = {
      countCounter: 1,
    };
  }

  handleIncrementCounter() {
    this.setState({
      countCounter: this.state.countCounter + 1,
    });
  }

  handleDecrementCounter() {
    this.setState({
      countCounter: this.state.countCounter - 1,
    });
  }

  handleResetCounter() {
    this.setState({
      countCounter: 1,
    });
  }

  render() {
    const props = {
      handleIncrementCounter: this.handleIncrementCounter,
      handleDecrementCounter: this.handleDecrementCounter,
      handleResetCounter: this.handleResetCounter,
      countCounter: this.state.countCounter,
    };
    return <CountCounter {...props} />;
  }
}

export default CountCounterContainer;
