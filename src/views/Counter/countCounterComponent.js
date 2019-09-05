import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { StyledButton } from './styles';
import CounterContainer from '../../containers/CounterContainer';


function PushComponent(rows, buttonBinding, countCounter) {
  for (let i = 0; i < countCounter; i += 1) {
    rows.push(<CounterContainer buttonBinding={buttonBinding} countState={countCounter} key={i} />);
  }
}

const countCounter = (props) => {
  const rows = [];
  PushComponent(rows, props.buttonBinding, props.countCounter);
  return (
    <div>
      <h1>{props.countCounter}</h1>
      <StyledButton onClick={props.handleIncrementCounter}>
        Increment Counter
      </StyledButton>
      <StyledButton onClick={props.handleDecrementCounter}>Decrement Counter</StyledButton>
      <Button
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
  buttonBinding: PropTypes.number.isRequired,
};

export default countCounter;
