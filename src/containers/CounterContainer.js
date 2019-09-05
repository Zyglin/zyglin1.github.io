/* eslint-disable class-methods-use-this */
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
      countState: props.countState,
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }


  componentDidMount() {
    console.log('componentDidMount');
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.isEven === 2 && this.state.count % 2 === 0) {
      console.log(' %c componentWillReceiveProps RRR', 'color: red');
      this.handleIncrement();
    } else if (nextProps.isEven === 1 && this.state.count % 2 !== 0) {
      console.log(' %c componentWillReceiveProps blue', 'color: blue');
      this.handleDecrement();
    } else if (nextProps.isEven === 3) {
      this.setState({
        count: 0,
      });
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
