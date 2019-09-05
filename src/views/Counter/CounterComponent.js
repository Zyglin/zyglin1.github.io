import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './css/stylesForCount.css';

const counter = (props) => (
  <div>
    <h1>{props.count}</h1>
    <Button className={styles.button} onClick={props.handleIncrement}>
        Increment
    </Button>
    <button onClick={props.handleDecrement}>Decrement</button>
    <Button
      variant="contained"
      color="secondary"
      onClick={props.handleReset}
    >
        Reset
    </Button>
  </div>
);

counter.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default counter;
