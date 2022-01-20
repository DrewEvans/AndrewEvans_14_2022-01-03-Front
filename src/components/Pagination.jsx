import React from "react";

const Pagination = ({ totalRows, rowsPerPage, paginate, onChange }) => {
	const numberOfPages = [];

	for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
		numberOfPages.push(i);
	}

	return (
		<div>
			<label htmlFor='rows-per-page'>Rows per Page:</label>
			<select name='rows' id='rowNum-select' onChange={onChange}>
				<option value='10'>10</option>
				<option value='5'>5</option>
				<option value='20'>20</option>
				<option value='50'>50</option>
			</select>
			<ul>
				{numberOfPages.map((pageNumber) => {
					return (
						<li
							key={pageNumber}
							onClick={() => paginate(pageNumber)}
						>
							{pageNumber}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Pagination;
