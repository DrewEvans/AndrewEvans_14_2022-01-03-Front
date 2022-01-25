import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const sortIcon = <FontAwesomeIcon className='sort-icon' icon={faSort} />;

const Table = ({ tableConfig, onClick, onChange, data }) => {
	const columnHeaders = [];
	const rowFields = [];

	for (const { header, field } of tableConfig) {
		columnHeaders.push(header);
		rowFields.push(field);
	}

	return (
		<>
			<div className='search-container'>
				<label className='search-label'>Search</label>
				<input
					className='search-input'
					type='search'
					onKeyUp={onChange}
				></input>
			</div>
			{data && (
				<table>
					<thead>
						<tr>
							{columnHeaders.map((header) => {
								return (
									<th key={header} onClick={onClick}>
										{header} <span>{sortIcon}</span>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((rows, i) => {
							const {
								city,
								birthDate,
								department,
								firstName,
								lastName,
								startDay,
								state,
								street,
								zipCode,
							} = rows;
							return (
								<tr className='row-data' key={`row-${i}`}>
									<td>{city}</td>
									<td>{birthDate}</td>
									<td>{department}</td>
									<td>{firstName}</td>
									<td>{lastName}</td>
									<td>{startDay}</td>
									<td>{state}</td>
									<td>{street}</td>
									<td>{zipCode}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};

export default Table;
