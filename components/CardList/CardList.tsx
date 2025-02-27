import { useSearchParams } from 'react-router-dom';

import styles from './CardList.module.css';
import Card from './Card';
import { AstronomicalObject } from '../types/shared';
import { useCloseDetailedCard } from '../hooks/useCloseDetailedCard';
import { useGetAstronomicalObjQuery } from '../services/apiSlice';

interface CardListProps {
  searchTerm: string;
}

const CardList = ({ searchTerm }: CardListProps) => {
  const [searchParams] = useSearchParams();
  const handleClose = useCloseDetailedCard();

  const page = Number(searchParams.get('page')) || 0;

  const {
    data: astronomicalObjects = [],
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAstronomicalObjQuery(page);

  let content: React.ReactNode;

  if (isFetching) {
    content = <div className="spinner"></div>;
  } else if (isSuccess) {
    const filteredData = searchTerm
      ? astronomicalObjects.filter((item: AstronomicalObject) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : astronomicalObjects;

    content = filteredData.map((item: AstronomicalObject) => (
      <Card
        key={item.uid}
        name={item.name}
        type={item.astronomicalObjectType}
        uid={item.uid}
      />
    ));
  } else if (isError) content = <div>{error.toString()}</div>;

  return (
    <div onClick={handleClose} className={styles.cardList}>
      {content}
    </div>
  );
};

export default CardList;
