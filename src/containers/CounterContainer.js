
import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter';

export class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.Reset = this.Reset.bind(this);
    this.state = {
      count: 0,
    };
  }

  Increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  Decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  Reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const props = {
      Decrement: this.Decrement,
      Increment: this.Increment,
      Reset: this.Reset,
      Count: this.state.count,
    };
    return <Counter {...props} />;
  }
}

CounterContainer.PropTypes = {
  Decrement: PropTypes.func.isRequired,
  Increment: PropTypes.func.isRequired,
  Reset: PropTypes.func.isRequired,
  Count: PropTypes.number.isRequired,
};

export default CounterContainer;
