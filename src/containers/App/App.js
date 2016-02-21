import React, { Component } from 'react';
import {fluid, Row, Col} from 'react-bootstrap';
import { Header, Sidebar, NavBar } from '../../components/index';
import classname from 'classnames/bind';
import styles from './App.scss';
const cx = classname.bind(styles);

class App extends Component {
  render() {
    return (
      <fluid>
        <Row>
          <Col md={10} className={styles.container}>
            <Header />
            <NavBar />
            <div className={cx('content_container')}>
              {this.props.children}
            </div>
          </Col>
          <Col md={2}>
            <Sidebar />
          </Col>
        </Row>
      </fluid>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
