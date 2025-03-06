import { GetServerSideProps } from 'next';

import { AstronomicalObject } from 'types/shared';
import { fetchSingleAstronomicalObject } from '../../lib/api-utils';
import MainLayout from 'components/layouts/MainLayout';
import DetailedCard from 'components/DetailedCard/DetailedCard';

const AstronomicalObjectDetail = ({ data }: { data: AstronomicalObject }) => {
  if (!data) {
    return <div>Object not foud</div>;
  }

  return (
    <MainLayout>
      <DetailedCard astronomicalObject={data} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (async (context) => {
  try {
    const { cardId } = context.params || {};

    if (typeof cardId !== 'string') {
      return { notFound: true };
    }

    const data = await fetchSingleAstronomicalObject(cardId);

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching astronomical object:', error);
    return {
      props: { data: null },
    };
  }
}) satisfies GetServerSideProps<{ data: AstronomicalObject | null }>;

export default AstronomicalObjectDetail;
