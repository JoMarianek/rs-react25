import { Link, useSearchParams } from 'react-router-dom';

import styles from './Pagination.module.css';
import { ITEMS_PER_PAGE } from '../../config/config';

const Pagination = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalElements = 24;
  const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <Link
          key={pageNumber}
          to={pageNumber === 1 ? '/' : `/?page=${pageNumber}`}
        >
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
