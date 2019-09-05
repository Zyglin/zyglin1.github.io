import React from 'react';
import CountCounter from '../views/Counter/countIndex';

class CountCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countCounter: 1,
      isEven: 1,
    };
  }

  handleIncrementCounter = () => {
    this.setState({
      countCounter: this.state.countCounter + 1,
      isEven: 2,
    });
  }

  handleDecrementCounter = () => {
    if (this.state.countCounter > 1) {
      this.setState({
        countCounter: this.state.countCounter - 1,
        isEven: 1,
      });
    }
  }

  handleResetCounter = () => {
    this.setState({
      countCounter: 1,
      isEven: 3,
    });
  }

  render() {
    const props = {
      handleIncrementCounter: this.handleIncrementCounter,
      handleDecrementCounter: this.handleDecrementCounter,
      handleResetCounter: this.handleResetCounter,
      countCounter: this.state.countCounter,
      isEven: this.state.isEven,
    };
    return <CountCounter {...props} />;
  }
}

export default CountCounterContainer;
