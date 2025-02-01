import { Component } from 'react';
import styles from './SearchComponent.module.css';

class SearchComponent extends Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.input} />
        <button className={styles.button}>Search</button>
      </div>
    );
  }
}

export default SearchComponent;
