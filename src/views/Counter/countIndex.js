/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './styles';
import CounterContainer from '../../containers/CounterContainer';


function PushComponent(rows, props, even, notEven) {
  rows.push(<CounterContainer index={notEven} key={0} />);
  for (let i = 1; i < props.countCounter; i += 1) {
    if (i % 2 === 0) { rows.push(<CounterContainer key={i} index={notEven} />); } else {
      rows.push(<CounterContainer index={even} key={i} />);
    }
  }
}

const countCounter = (props) => {
  const classes = styles.useStyles;
  const even = true;
  const notEven = false;
  const rows = [];
  PushComponent(rows, props, even, notEven);
  return (
    <div className="counter">
      <h1>{props.countCounter}</h1>
      <button style={styles.TodoComponent} onClick={props.handleIncrementCounter}>
        Increment Counter
      </button>
      <button onClick={props.handleDecrementCounter}>Decrement Counter</button>
      <Button
        сlassName={classes.button}
        variant="contained"
        color="secondary"
        onClick={props.handleResetCounter}
      >
        Reset Counter
      </Button>
      {
        rows
      }
    </div>
  );
};

countCounter.propTypes = {
  handleDecrementCounter: PropTypes.func.isRequired,
  handleIncrementCounter: PropTypes.func.isRequired,
  handleResetCounter: PropTypes.func.isRequired,
  countCounter: PropTypes.number.isRequired,
};

export default countCounter;
