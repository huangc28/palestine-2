import React, { Component } from 'react';
import { NewsBlock } from '../../components/index';

class Home extends Component {
  render() {
    return (
      <div>
        <NewsBlock />
        <NewsBlock />
      </div>
    );
  }
}

export default Home;
