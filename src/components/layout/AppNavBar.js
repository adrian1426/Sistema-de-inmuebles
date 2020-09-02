import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

class AppNavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar></ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default AppNavBar;