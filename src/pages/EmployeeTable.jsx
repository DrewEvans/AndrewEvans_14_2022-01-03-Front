import React, { useState } from "react";
import { sortArray } from "../helpers/sortEmployeeHeaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort } from '@fortawesome/free-solid-svg-icons'
import './styles/tableStyle.css'
import { searchEmployee } from "../helpers/searchEmployee";
import { siblingNodeDirection } from "../helpers/siblingNodeDirection";

const sortIcon = <FontAwesomeIcon className="sort-icon" icon={faSort} />

const EmployeeTable = React.memo(({ data }) => {

	const [sortedData, setSortedData ] = useState([]);
	const [sortDirection, setSortDirection] = useState("")
	const [searchKey, setSearchKey] = useState("")

	const handleClick = (e) => {
		const value = e.target.innerText.toLowerCase().replace(/\s+/g, '');
		
		setSortDirection(siblingNodeDirection(e))	

		if (searchKey.length > 0){
			setSortedData (sortArray(value, sortedData, sortDirection))
		} else {
		setSortedData (sortArray(value, data.body, sortDirection))
		}
	};



const handleChange = (e) => {
	setSearchKey(e.target.value);
	setSortedData(searchEmployee(data.body, searchKey))
}

	return (
		<>
			<label>Search</label>
			<input type="search" onKeyUp={handleChange}></input>
		<table >
			<thead>
				<tr>
					<th onClick={handleClick}>City <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Date of Birth <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Department <span>{sortIcon}</span></th>
					<th onClick={handleClick}>First Name <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Last Name <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Start Date <span>{sortIcon}</span></th>
					<th onClick={handleClick}>State <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Street <span>{sortIcon}</span></th>
					<th onClick={handleClick}>Zip Code <span>{sortIcon}</span></th>
				</tr>
			</thead>
			<tbody>
				{ !sortedData.length ?   data.body.map((employee, i) => {
				const {city, birthDate, department, firstName, lastName, startDay, state, street, zipCode} = employee;		
					return (
						<tr className="row-data" key={`row-${i}`}>
							<td>{city} </td> 
							<td>{birthDate}</td>
							<td>{department}</td>
							<td>{firstName}</td>
							<td>{lastName}</td>
							<td>{startDay}</td>
							<td>{state}</td>
							<td>{street}</td>
							<td>{zipCode}</td>
						</tr> 
					)
				}) : sortedData.map((employee, i) => {
					const {city, birthDate, department, firstName, lastName, startDay, state, street, zipCode} = employee;		
						return (
							<tr className="row-data" key={`row-${i}`}>
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
						)
					})}
			</tbody>
		</table>
		</>
	);
});

export default EmployeeTable ;
