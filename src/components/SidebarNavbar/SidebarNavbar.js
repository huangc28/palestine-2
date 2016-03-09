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
      <div>
        {Object.keys(this.props.sidebarMenu).map((title) => {
          {title}
        })}
      </div>
    );
  }
}

SidebarNavbar.propTypes = {
  sidebarMenu: React.PropTypes.object,
};

export default SidebarNavbar;
