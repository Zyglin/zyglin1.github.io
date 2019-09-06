/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Switch, Route, Link, BrowserRouter,
} from 'react-router-dom';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';
import CounterContainer from '../../../containers/CounterContainer';

const StyledButton = styled(Button)(styles.button);

const StyledButtonForReset = styled(Button)(styles.buttonReset);


function PushComponent(buttonBinding, countCounter) {
  const rows = [];
  for (let i = 0; i < countCounter; i += 1) {
    rows.push(<CounterContainer buttonBinding={buttonBinding} countState={countCounter} key={i} />);
  }
  return rows;
}

const countCounter = (props) => {
  const rows = PushComponent(props.buttonBinding, props.countCounter);
  return (
    <div>
      <BrowserRouter>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          component={Link} to="/"
        >
          <Tab label="About us" component={Link} to="/about" />
          <Tab label="Counters" component={Link} to="/counters" />
        </Tabs>
        <Switch>
          <Route
            path="/about" render={() => <div>Мы инженеры, и нам нравится решать нестандартные
          <p>и технически сложные задачи.</p>
          Мы страстно любим дело, которым занимаемся,
          <p>и в любых обстоятельствах достигаем лучшего результата из возможных.</p>
                                        </div>}
          />
          <Route
            path="/counters" render={() => <div>
              <h1>{props.countCounter}</h1>
              <StyledButton onClick={props.handleIncrementCounter}>
            Inc.Count
              </StyledButton>
              <StyledButton onClick={props.handleDecrementCounter}>Dec.Count</StyledButton>
              <StyledButtonForReset
                variant="contained"
                color="secondary"
                onClick={props.handleResetCounter}
              >
            Reset Counter
              </StyledButtonForReset>
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
