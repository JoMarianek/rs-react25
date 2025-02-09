import { Link } from 'react-router-dom';

import styles from './Pagination.module.css';

const Pagination = () => {
  const totalElements = 24;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalElements / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} to={`/?page=${pageNumber}`}>
          <button className={styles.button}>{pageNumber}</button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
