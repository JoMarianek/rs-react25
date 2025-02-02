import { Component } from 'react';
import styles from './Card.module.css';

class Card extends Component<{ name: string; type: string }> {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div>
          <h2>{this.props.name}</h2>
        </div>
        <div>
          <p>This astronomical object is of type: {this.props.type}</p>
        </div>
      </div>
    );
  }
}

export default Card;
