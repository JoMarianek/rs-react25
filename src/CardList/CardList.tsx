import { Component } from 'react';
import styles from './CardList.module.css';

class CardList extends Component {
  render() {
    return (
      <div className={styles.cardList}>Results will be displayed here.</div>
    );
  }
}

export default CardList;
