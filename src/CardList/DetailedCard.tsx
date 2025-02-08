import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from './DetailedCard.module.css';

import { fetchSingleAstronomicalObject } from '../services/ApiCall';
import { AstronomicalObject } from '../types/shared';

const DetailedCard = () => {
  const [searchParams] = useSearchParams();
  const [singleObject, setSingleObject] = useState<AstronomicalObject | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>();
  // const { closeOutlet } = useOutletContext<{ closeOutlet: (event: MouseEvent) => void }>();

  const uid = searchParams.get('details');

  useEffect(() => {
    if (!uid) return;
    const fetchData = async () => {
      setLoading(true);

      try {
        const fetchResult = await fetchSingleAstronomicalObject(uid);
        setSingleObject(fetchResult);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchData();
  }, [uid]);

  if (!uid) return;
  return (
    <div className={styles.detailedCard}>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <button className={styles.button}>x</button>
          <h3 className={styles.heading}>{singleObject?.name}</h3>
          <p>
            This {singleObject?.astronomicalObjectType} is located in the{' '}
            {singleObject?.location.name}, which is of type{' '}
            {singleObject?.location.astronomicalObjectType.toLowerCase()}
          </p>
        </>
      )}
    </div>
  );
};

export default DetailedCard;
