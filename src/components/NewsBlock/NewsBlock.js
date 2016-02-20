import React, { Component } from 'react';

/*
 * NewsBlock
 *  - News block header
 *  - News block content
 *
 *
 */
class NewsBlock extends Component {
  render() {
    const styles = require('./NewsBlock.scss');
    return (
      <div className={styles.container}>
        {/* NewsBlock Header */}
        <div>
          {/* Green Tag */}
          <div className={styles.tag}>
            直接行動
          </div>

          {/* title */}
          <div className={styles.title}>
            2015年11月站樁公告－11/21
          </div>
          <div className={styles.clear}></div>
        </div>

        {/* NewsBlock content */}
        <div>
          news block content
        </div>
      </div>
    );
  }
}

export default NewsBlock;
