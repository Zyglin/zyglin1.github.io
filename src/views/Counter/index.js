import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './styles';

const counter = (props) => {
  const classes = styles.useStyles();
  return (
    <div className="counter">
      <h1>{props.count}</h1>
      <button сlassname={classes.todoComponent} onClick={props.handleIncrement}>
        Increment
      </button>
      <button onClick={props.handleDecrement}>Decrement</button>
      <Button
        сlassname={classes.button}
        variant="contained"
        color="secondary"
        onClick={props.handleReset}
      >
        Reset
      </Button>
    </div>
  );
};

counter.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default counter;
