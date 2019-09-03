import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const counter = (props) => {
  const classes = useStyles();
  return (
    <div className="counter">
      <h1>{props.count}</h1>
      <button style={styles.TodoComponent} onClick={props.handleIncrement}>
        Increment
      </button>
      <button onClick={props.handleDecrement}>Decrement</button>
      <Button
        сlassName={classes.button}
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
