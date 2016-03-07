import React, {Component} from 'react';
import classname from 'classnames/bind';
import styles from './Header.scss';
import Logo from '../Logo/Logo';
import Banner from '../Banner/Banner';
import SearchBar from '../SearchBar/SearchBar';
import {fluid, Row, Col} from 'react-bootstrap';
const cx = classname.bind(styles);
/*
 * - React bootstrap
 * - Logo image
 * - Banner image
 * - search bar
 *
 */
export default class Header extends Component {
  render() {
    return (
      <fluid>
        <Row>
          <Col md={12} className={cx('container')}>
            <div className={cx('left')}><Logo /></div>
            <div className={cx('left')}><Banner /></div>
            <div className={cx('right')}><SearchBar /></div>
            <div className={cx('clear')}></div>
          </Col>
        </Row>
      </fluid>
    );
  }
}
