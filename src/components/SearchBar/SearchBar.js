import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    const styles = require('./SearchBar.scss');
    return (
      <div>
        { /* Contact Us */}
        <a href="*">聯絡我們</a><br/>

        { /* Search Bar */ }
        <input className={styles.SearchBarSize} type="text" value="站內搜尋" />
      </div>
    );
  }
}

export default SearchBar;
