/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TabPanel from '../views/Counter/TabPanels';

class TabPanelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: props.location.pathname,
    };
  }

  render() {
    switch (this.state.pathname) {
      case '/':
        return <TabPanel value={false} />;
      case '/about':
      case '/counters':
      case '/login':
      case '/login-redux':
      case '/login-redux-form':
        return <TabPanel value={this.state.pathname} />;
      default:
        return null;
    }
  }
}

TabPanelContainer.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.any,
};

export default withRouter(TabPanelContainer);
