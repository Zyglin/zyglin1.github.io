import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './styles';

const countCounter = (props) => {
  const classes = styles.useStyles;
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
        Reset
      </Button>
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
