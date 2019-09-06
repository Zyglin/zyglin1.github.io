import React from 'react';
import CountCounter from '../views/Counter/CountCounter/CountCounterComponent';

class CountCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textCompDidUpdate = 'componentDidUpdateParent';
    this.textCompDidMount = 'componentDidMountParent';
    this.textCompWillUnMount = 'componentWillUnmountParent';
    this.textShouldCompDidUpdate = 'shouldComponentUpdateParent';
    this.getDerivedStateFromProps = 'getDerivedStateFromPropsParent';
    this.getSnapshotBeforeUpdate = 'getSnapshotBeforeUpdateParent';
    this.state = {
      countCounter: 1,
      buttonBinding: 1,
    };
  }

  componentDidUpdate() {
    console.log(this.shouldComponentUpdate);
  }

  shouldComponentUpdate() {
    return this.textShouldCompDidUpdate;
  }

  componentDidMount() {
    console.log(this.textCompDidMount);
  }

  getDerivedStateFromProps() {
    console.log(this.getDerivedStateFromProps);
  }

  getSnapshotBeforeUpdate() {
    console.log(this.getSnapshotBeforeUpdate);
  }

  componentWillUnmount() {
    console.log(this.textCompWillUnMount);
  }

  handleIncrementCounter = () => {
    this.setState({
      countCounter: this.state.countCounter + 1,
      buttonBinding: 2,
    });
  }

  handleDecrementCounter = () => {
    if (this.state.countCounter > 1) {
      this.setState({
        countCounter: this.state.countCounter - 1,
        buttonBinding: 1,
      });
    }
  }

  handleResetCounter = () => {
    this.setState({
      countCounter: 1,
      buttonBinding: 3,
    });
  }

  render() {
    console.log('renderParent');
    const props = {
      handleIncrementCounter: this.handleIncrementCounter,
      handleDecrementCounter: this.handleDecrementCounter,
      handleResetCounter: this.handleResetCounter,
      countCounter: this.state.countCounter,
      buttonBinding: this.state.buttonBinding,
    };
    return <CountCounter {...props} />;
  }
}

export default CountCounterContainer;
