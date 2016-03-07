import React, {Component} from 'react';
import {Grid, Row, Col, Nav} from 'react-bootstrap';
import classname from 'classnames/bind';
// import lodash from 'lodash';
import styles from './SidebarNavbar.scss';
// console.log(_);
const cx = classname.bind(styles);

class SidebarNavbar extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Nav style={{textAlign: 'center'}} className={cx('SidebarNav')}>something</Nav>
          </Col>
        </Row>
      </Grid>
    );
  }
}

SidebarNavbar.propTypes = {
  sidebarMenu: React.PropTypes.object,
};

export default SidebarNavbar;
