import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "../pages/styles/paginationStyle.css";

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const angleRight = <FontAwesomeIcon icon={faAngleRight} />;

const Pagination = ({
  totalRows,
  rowsPerPage,
  paginate,
  currentPage,
  onChange,
}) => {
  //empty array of pages
  const numberOfPages = [];

  //loop over the number of pages that are needed depending on rows per page
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <div className='container'>
      <div className='select-container'>
        <p className='display-text'>
          Showing page <strong> {currentPage}</strong> of{" "}
          <strong>{numberOfPages.at(-1)}</strong>
        </p>
        <div className='select-options'>
          <label htmlFor='rows-per-page' className='page-label'>
            Rows per Page:
          </label>
          <select
            className='page-select'
            name='rows'
            id='rowNum-select'
            onChange={onChange}>
            <option value='10'>10</option>
            <option value='5'>5</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>
        </div>
      </div>
      <div className='pagination-directions'>
        <button
          className='direction-left'
          onClick={() => paginate(currentPage - 1)}
          disabled={numberOfPages.at(0) === currentPage}>
          {angleLeft}
        </button>
        <button className='current-center'>{currentPage}</button>
        <button
          className='direction-right'
          onClick={() => paginate(currentPage + 1)}
          disabled={numberOfPages.at(-1) === currentPage}>
          {angleRight}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
