import React, { useState } from "react";
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
  let [num, setNum] = useState(1);
  const numberOfPages = [];
  const pagesToDisplay = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
   
  ];

  // Math.ceil(parseInt(rowsPerPage) % numberOfPages.length) + 1;
  const next = () => {
    setNum(++num);
  };

  const prev = () => {
    num > 1 && setNum(--num);
  };

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    numberOfPages.push(i);
  }


  
  return (
    <div className='container'>
      <div className='select-container'>
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
      <div>
        <button disabled={numberOfPages.at(0) === currentPage} onClick={ () =>(prev(), paginate(currentPage - 1))} >{angleLeft}</button>
        {numberOfPages.length <=  1 ? <button>{currentPage}</button> : console.log("render"), pagesToDisplay.map((pg, i) => {
		return (<button
		key={i++}
		onClick={() => (paginate(pg.page))}
		>
		{pg.page}
		</button>)
	})}
	
        <button onClick={() =>(next(), paginate(currentPage + 1))} disabled={numberOfPages.at(-1) === currentPage}>{angleRight}</button>
      </div>
    </div>
  );
};

export default Pagination;
