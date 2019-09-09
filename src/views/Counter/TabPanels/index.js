import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TabPanel = props => {
  const [value, setValue] = React.useState(props.value);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="root">
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" component={Link} value="/about" to="/about" />
          <Tab label="Counters" component={Link} value="/counters" to="/counters" />
          <Tab label="Login" component={Link} value="/login" to="/login" />
          <Tab label="LoginRedux" component={Link} value="/login-redux" to="/login-redux" />
          <Tab label="LoginReduxForm" component={Link} value="/login-redux-form" to="/login-redux-form" />
        </Tabs>
      </AppBar>
    </div>
  );
};

TabPanel.propTypes = {
  value: PropTypes.any.isRequired,
};
export default TabPanel;
