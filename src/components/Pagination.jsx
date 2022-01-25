import React from "react";
import "../pages/styles/paginationStyle.css";

const Pagination = ({
	totalRows,
	rowsPerPage,
	paginate,
	currentPage,
	onChange,
}) => {
	const numberOfPages = [];

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
					onChange={onChange}
				>
					<option value='10'>10</option>
					<option value='5'>5</option>
					<option value='20'>20</option>
					<option value='50'>50</option>
				</select>
			</div>
			<ul>
				{numberOfPages.at(0) === currentPage && (
					<>
						<li onClick={() => paginate(currentPage)}>
							{currentPage}
						</li>

						<li onClick={() => paginate(currentPage + 1)}>
							{currentPage + 1}
						</li>
						<li onClick={() => paginate(currentPage + 2)}>
							{currentPage + 2}
						</li>
					</>
				)}

				{numberOfPages.at(-1) !== currentPage &&
					numberOfPages.at(0) !== currentPage && (
						<>
							<li onClick={() => paginate(currentPage - 1)}>
								{currentPage - 1}
							</li>
							<li onClick={() => paginate(currentPage)}>
								{currentPage}
							</li>
							<li onClick={() => paginate(currentPage + 1)}>
								{currentPage + 1}
							</li>
						</>
					)}

				{numberOfPages.at(-1) === currentPage && (
					<>
						<li onClick={() => paginate(currentPage - 2)}>
							{currentPage - 2}
						</li>
						<li onClick={() => paginate(currentPage - 1)}>
							{currentPage - 1}
						</li>
						<li onClick={() => paginate(currentPage)}>
							{currentPage}
						</li>
					</>
				)}

				{/* {numberOfPages.map((pageNumber) => {
					return (
						<li
							key={pageNumber}
							onClick={() => paginate(pageNumber)}
						>
							{pageNumber}
						</li>
					);
				})} */}
			</ul>
		</div>
	);
};

export default Pagination;
