
import React from 'react';
import Counter from '../views/Counter/index';

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      // eslint-disable-next-line react/prop-types
      even: this.props.index,
    };
  }

  componentDidMount() {
    this.handleUnsafeComponentWillRecieveProps();
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

  handleUnsafeComponentWillRecieveProps() {
    if (this.state.even === true) {
      this.handleIncrement();
    }
  }

  render() {
    const props = {
      handleDecrement: this.handleDecrement,
      handleIncrement: this.handleIncrement,
      handleReset: this.handleReset,
      count: this.state.count,
      // eslint-disable-next-line react/prop-types
      index: this.state.even,
    };
    return <Counter {...props} />;
  }
}

export default CounterContainer;
