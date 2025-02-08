import { useSearchParams } from 'react-router-dom';
import styles from './Card.module.css';

interface CardProps {
  name: string;
  type: string;
  uid: string;
}

const Card = ({ name, type, uid }: CardProps) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <div
      onClick={() => setSearchParams({ details: uid })}
      className={styles.cardContainer}
    >
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
