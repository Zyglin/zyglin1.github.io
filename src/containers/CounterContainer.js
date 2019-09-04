/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */

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
      even: this.props.index,
    };
  }

  componentDidUpdate() {
    console.log('dddddddddd');
  }


  componentDidMount() {
    console.log('ffffffffffffff');
  }


  componentWillUnmount() {
    console.log('mmmmmmmmmm');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.countState);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.countState && this.state.even === true) {
      console.log(this.state.even);
      this.handleUnsafeComponentWillRecievePropsEven();
    } else if (this.state.even === false) {
      console.log(this.state.even);
      this.handleUnsafeComponentWillRecievePropsNotEven();
    }
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

  handleUnsafeComponentWillRecievePropsEven() {
    this.handleIncrement();
  }

  handleUnsafeComponentWillRecievePropsNotEven() {
    this.handleDecrement();
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
