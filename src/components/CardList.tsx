import { useEffect, useState } from 'react';

import { fetchCountries } from '../services/apiCall';
import { CardProps } from '../shared/types';
import Card from './Card';
import styles from './CardList.module.css';

const CardList = () => {
  const [data, setData] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setData(await fetchCountries());
    };
    fetch();
  }, []);

  return (
    <ul>
      {data.map((item: CardProps, index: number) => (
        <li
          className={styles.cardList}
          key={item.name?.common && `no-name-${index}`}
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
