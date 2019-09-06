import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';

const StyledButtonChild = styled(Button)(styles.buttonChild);

const StyledButtonChildForReset = styled(Button)(styles.buttonResetChild);

const counter = props => (
  <div>
    <h1>{props.count}</h1>
    <StyledButtonChild onClick={props.handleIncrement}>Increment</StyledButtonChild>
    <StyledButtonChild onClick={props.handleDecrement}>Decrement</StyledButtonChild>
    <StyledButtonChildForReset variant="contained" color="secondary" onClick={props.handleReset}>
      Reset
    </StyledButtonChildForReset>
  </div>
);

counter.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default styled(counter)(styles.counterMargin);
