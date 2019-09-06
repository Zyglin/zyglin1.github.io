import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';

const TabPanel = () => (
  <div className="root">
    <AppBar position="fixed">
      <Tabs centered>
        <Tab label="About" component={Link} to="/about" />
        <Tab label="Counters" component={Link} to="/counters" />
      </Tabs>
    </AppBar>
  </div>
);

export default TabPanel;
