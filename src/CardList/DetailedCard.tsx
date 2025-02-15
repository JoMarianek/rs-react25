import { useSearchParams } from 'react-router-dom';

import styles from './DetailedCard.module.css';

import { useCloseDetailedCard } from '../hooks/useCloseDetailedCard';
import { useGetSingleAstronomicalObjQuery } from '../services/apiSlice';

const DetailedCard = () => {
  const [searchParams] = useSearchParams();
  const handleClose = useCloseDetailedCard();

  const uid = searchParams.get('details');

  const {
    data: astronomicalObject,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetSingleAstronomicalObjQuery(uid);

  let content: React.ReactNode;

  if (isFetching) {
    content = <div className="spinner"></div>;
  } else if (isSuccess) {
    content = (
      <p>
        This {astronomicalObject?.astronomicalObjectType} is located in the{' '}
        {astronomicalObject?.location?.name}, which is of type{' '}
        {astronomicalObject?.location?.astronomicalObjectType.toLowerCase()}
      </p>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
    console.error(error);
  }

  if (!uid) return;
  return (
    <div className={styles.detailedCard}>
      <button onClick={handleClose} className={styles.button}>
        x
      </button>
      <h3 className={styles.heading}>{astronomicalObject?.name}</h3>
      {content}
    </div>
  );
};

export default DetailedCard;
