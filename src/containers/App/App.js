import React, { Component } from 'react';
import { Header, NavBar } from '../../components/index';

class App extends Component {
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.container}>
        <div className={styles.content_container}>
          {/* Header */}
          <Header />

          {/* Navigation Bar */}
          <NavBar />

          {/* Content */}
          <div className={styles.content}>
            { this.props.children }
          </div>
        </div>

        {/* sidebar container */}
        <div className={styles.sidebar_container}>
          sidebar
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
