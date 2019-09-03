import React from 'react';
import CountCounter from '../views/Counter/countIndex';

class CountCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countCounter: 0,
    };
  }

  handleIncrementCounter() {
    this.setState({
      countCounter: this.state.count + 1,
    });
  }

  handleDecrementCounter() {
    this.setState({
      countCounter: this.state.count - 1,
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
