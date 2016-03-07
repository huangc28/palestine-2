import React, {Component} from 'react';
import styles from './Sidebar.scss';
import {Grid, Row, Col} from 'react-bootstrap';
import classname from 'classnames/bind';
import SidebarLogo from '../SidebarLogo/SidebarLogo';
import SidebarNavbar from '../SidebarNavbar/SidebarNavbar';
const cx = classname.bind(styles);

console.log(SidebarLogo);
class Sidebar extends Component {
  render() {
    const sidebarMenu = {
      '新聞簡報': '#',
      '歷史背景': '#',
      '隔離區': '#',
      '屯墾區': '#',
      '難民問題': '#',
      '政治文化': '#',
      '若雪書信': '#',
      '人權狀況': '#',
      '運動紀實': '#',
      '直接行動': '#',
      '其他地區': '#',
      '其他': '#'
    };

    const sidebarLogoStyle = {
      padding: '43px 34px 22px 34px'
    };

    const sidebarNavbarStyle = {
      padding: '0px'
    };
    return (
      <Grid>
        <Row>
          <Col className={cx('sidebarContainer')} md={12}>
            {/* sidebar logo */}
            <div style={sidebarLogoStyle}>
              <SidebarLogo />
            </div>
            {/* sidebar navigation */}
            <div style={sidebarNavbarStyle}>
              <SidebarNavbar sidebarMenu={sidebarMenu}/>
            </div>
            {/* sidebar logo */}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Sidebar;
