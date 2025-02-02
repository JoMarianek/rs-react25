import { Component } from 'react';
import styles from './CardList.module.css';

class CardList extends Component {
  // function fetchData() {
  //   const url = "https://stapi.co/api/v2/rest/astronomicalObject/search";
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`)
  //     }
  //     const json = await response.json();
  //   } catch (error) {
  //       console.error(error.message);
  //     }
  // };

  render() {
    return (
      <div className={styles.cardList}>Results will be displayed here.</div>
    );
  }
}

export default CardList;
