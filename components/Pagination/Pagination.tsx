import Link from 'next/link';

import styles from './Pagination.module.css';
import { ITEMS_PER_PAGE } from '../../config/config';
import { useRouter } from 'next/router';

const Pagination = () => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const totalElements = 24;
  const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const getHref = (pageNumber: number) => {
    const query = { ...router.query };

    if (pageNumber === 1) {
      delete query.page;
    } else {
      query.page = pageNumber.toString();
    }

    return {
      pathname: router.pathname,
      query,
    };
  };

  return (
    <div className={styles.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} href={getHref(pageNumber)} passHref>
          <button
            className={`${styles.button} ${currentPage === pageNumber ? styles.active : ''}`}
          >
            {pageNumber}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
