import React, {Component} from 'react';
import {fluid, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import Banner from '../Banner/Banner';
import SearchBar from '../SearchBar/SearchBar';

/*
 * - React bootstrap
 * - Logo image
 * - Banner image
 * - search bar
 *
 */
export default class Header extends Component {
  render() {
    // const styles = require('./Header.scss');
    return (
      <fluid>
        <Row>
          <Col md={2}>
            <Logo />
          </Col>
          <Col md={8}>
            <Banner />
          </Col>
          <Col md={2}>
            <SearchBar />
          </Col>
        </Row>
      </fluid>
    );
  }
}
