import React, { Component } from 'react';
import { Header, NavBar } from '../../components/index';

// console.log(NavBar);
// return false;

class App extends Component {
  render() {
    const styles = require('./App.scss');
    console.log(this.props.children);
    return (
      <div className={styles.root}>

        {/* Header */}
        <Header />

        {/* Navigation Bar */}
        <NavBar />

        {/* Content */}
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
