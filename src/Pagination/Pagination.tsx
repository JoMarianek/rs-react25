import { Link } from 'react-router-dom';

import styles from './Pagination.module.css';
import { ITEMS_PER_PAGE } from '../config';

const Pagination = () => {
  const totalElements = 24;
  const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} to={`/?page=${pageNumber}`}>
          <button className={styles.button}>{pageNumber}</button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
