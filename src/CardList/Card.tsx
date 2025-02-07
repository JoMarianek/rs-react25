import styles from './Card.module.css';

interface CardProps {
  name: string;
  type: string;
}

const Card = ({ name, type }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <p>This astronomical object is of type: {type.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default Card;
