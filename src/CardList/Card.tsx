import { useSearchParams } from 'react-router-dom';

import styles from './Card.module.css';

import { CardProps } from '../types/shared';
import CheckBox from '../CheckBox/CheckBox';

const Card = ({ name, type, uid }: CardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateURLParams = (): void => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('details', uid);
    setSearchParams(newSearchParams);
  };

  return (
    <div
      data-testid="card-container"
      onClick={updateURLParams}
      className={styles.cardContainer}
    >
      <CheckBox uid={uid} name={name} type={type} />
      <h2>{name}</h2>
      <p>This astronomical object is of type: {type.toLowerCase()}</p>
    </div>
  );
};

export default Card;
