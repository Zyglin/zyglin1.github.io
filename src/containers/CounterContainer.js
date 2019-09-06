import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter/Count';

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.textCompDidUpdate = 'componentDidUpdateChild';
    this.textCompDidMount = 'componentDidMountChild';
    this.textCompWillUnMount = 'componentWillUnmountChild';
    this.textShouldCompDidUpdate = 'shouldComponentUpdateChild';
    this.getDerivedStateFromProps = 'getDerivedStateFromPropsChild';
    this.getSnapshotBeforeUpdate = 'getSnapshotBeforeUpdateChild';
    this.state = {
      count: 0,
      countState: props.countState,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.buttonBinding === 2 && this.state.count % 2 === 0) {
      console.log(' %c componentWillReceiveProps RRR', 'color: red');
      this.handleIncrement();
    } else if (nextProps.buttonBinding === 1 && this.state.count % 2 !== 0) {
      console.log(' %c componentWillReceiveProps blue', 'color: blue');
      this.handleDecrement();
    } else if (nextProps.buttonBinding === 3) {
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
    console.log('render');
    const props = {
      handleDecrement: this.handleDecrement,
      handleIncrement: this.handleIncrement,
      handleReset: this.handleReset,
      count: this.state.count,
    };
    return <Counter {...props} />;
  }
}
CounterContainer.propTypes = {
  countState: PropTypes.number.isRequired,
  buttonBinding: PropTypes.number.isRequired,
};

export default CounterContainer;
