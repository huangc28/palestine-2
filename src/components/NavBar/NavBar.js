import React, { Component } from 'react';
import styles from './NavBar.scss';

/*
 *
 * - 關於本站
 * - 網站連結
 * - 巴勒斯坦地圖
 * - 你能做什麼
 * - 訪客網站留言板
 *
 */
class NavBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ul>
          <li>
            <a href="#">關於本站</a>
          </li>
          <li>
            <a href="#">網站連結</a>
          </li>
          <li>
            <a href="#">巴勒斯坦地圖</a>
          </li>
          <li>
            <a href="#">訪客網站留言板</a>
          </li>
          <li>
            <a href="#">你能做什麼</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
