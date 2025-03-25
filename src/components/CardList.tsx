import { useEffect } from 'react';

import { CardProps } from '../shared/types';
import Card from './Card';
import styles from './CardList.module.css';
import { fetchCountries } from '../services/apiCall';

type CardListProps = {
  data: CardProps[];
  setData: React.Dispatch<React.SetStateAction<CardProps[]>>;
  searchTerm: string;
};

const CardList = ({ data, setData, searchTerm }: CardListProps) => {
  useEffect(() => {
    const fetch = async () => {
      setData(await fetchCountries());
    };
    fetch();
  }, [setData]);

  const filteredData = data.filter((item) =>
    item?.name?.common?.toLowerCase().includes(searchTerm)
  );

  return (
    <ul>
      {filteredData.map((item: CardProps, index: number) => (
        <li
          className={styles.cardList}
          key={item.name?.common || `no-name-${index}`}
        >
          <Card
            name={item?.name}
            population={item?.population}
            region={item?.region}
            flag={item?.flag}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
