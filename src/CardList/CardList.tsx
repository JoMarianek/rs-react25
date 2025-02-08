import { useState } from 'react';
import { useEffect } from 'react';
import styles from './CardList.module.css';
import Card from './Card';
import { fetchAstronomicalObjects } from '../services/ApiCall';
import { AstronomicalObject } from '../types/shared';

interface CardListProps {
  searchTerm: string;
}

const CardList = ({ searchTerm }: CardListProps) => {
  const [data, setData] = useState<AstronomicalObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const allData = await fetchAstronomicalObjects();

        const filteredData = searchTerm
          ? allData.filter((item: AstronomicalObject) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : allData;

        setData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className={styles.cardList}>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        data.map((item: AstronomicalObject) => (
          <Card
            key={item.uid}
            name={item.name}
            type={item.astronomicalObjectType}
            uid={item.uid}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
