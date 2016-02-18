import React, { Component } from 'react';

class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.root}>
        this is from home.
      </div>
    );
  }
}

export default Home;
