import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './styles';
import CounterContainer from '../../containers/CounterContainer';

const countCounter = (props) => {
  const classes = styles.useStyles;
  const rows = [];
  rows.push(<CounterContainer />);
  for (let i = 1; i < props.countCounter; i += 1) {
    rows.push(<CounterContainer />);
    // eslint-disable-next-line no-console
    console.log(rows);
  }

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
