import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { StyledButtonChild } from './styles';

const counter = (props) => (
  <div>
    <h1>{props.count}</h1>
    <StyledButtonChild onClick={props.handleIncrement}>
        Increment
    </StyledButtonChild>
    <StyledButtonChild onClick={props.handleDecrement}>Decrement</StyledButtonChild>
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
