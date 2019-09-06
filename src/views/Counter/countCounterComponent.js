/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Switch, Route, Link, BrowserRouter,
} from 'react-router-dom';
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
      <BrowserRouter>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          component={Link} to="/"
        >
          <Tab label="О нас" component={Link} to="/about" />
          <Tab label="Счётчики" component={Link} to="/counters" />
        </Tabs>
        <Switch>
          <Route path="/about" render={() => <div>kfkfkkfkfkf</div>} />
          <Route
            path="/counters" render={() => <div>
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
                                           </div>}
          />
        </Switch>
      </BrowserRouter>
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
