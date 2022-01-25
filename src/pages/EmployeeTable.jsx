import React, { useEffect, useState } from "react";
import { sortArray } from "../helpers/sortEmployeeHeaders";
import { searchEmployee } from "../helpers/searchEmployee";
import { siblingNodeDirection } from "../helpers/siblingNodeDirection";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import styled from "styled-components";
import "./styles/tableStyle.css";

const DivContainer = styled.div`
	margin: 0 auto;
	width: 85%;
`;

const EmployeeTable = React.memo(({ data }) => {
	const [currentRows, setCurrentRows] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [sortDirection, setSortDirection] = useState("");
	const [searchKey, setSearchKey] = useState("");

	const indexofLastRow = currentPage * rowsPerPage;
	const indexOfFirstRow = indexofLastRow - rowsPerPage;
	const totalRows = Math.ceil(data.body.length);

	useEffect(() => {
		setCurrentRows(data.body.slice(indexOfFirstRow, indexofLastRow));
	}, [currentPage, rowsPerPage]);

	const handleClick = (e) => {
		const value = e.target.innerText.toLowerCase().replace(/\s+/g, "");

		setSortDirection(siblingNodeDirection(e));

		if (searchKey.length > 0) {
			setCurrentRows(sortArray(value, currentRows, sortDirection));
		} else {
			setCurrentRows(sortArray(value, currentRows, sortDirection));
		}
	};

	const handleChange = (e) => {
		setSearchKey(e.target.value);

		searchKey
			? setCurrentRows(searchEmployee(data.body, searchKey))
			: setCurrentRows(data.body.slice(indexOfFirstRow, indexofLastRow));
	};

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const rowChange = (e) => {
		setRowsPerPage(e.target.value);
		setCurrentPage(1);
	};

	const tableConfig = [
		{ header: "City", field: "city" },
		{ header: "Date of Birth", field: "birthDate" },
		{ header: "Department", field: "deparment" },
		{ header: "First Name", field: "firstName" },
		{ header: "Last Name", field: "lastName" },
		{ header: "Start Date", field: "startDay" },
		{ header: "State", field: "state" },
		{ header: "Street", field: "Street" },
		{ header: "Zip Code", field: "zipCode" },
	];

	return (
		<>
			<DivContainer>
				<Table
					tableConfig={tableConfig}
					onClick={handleClick}
					onChange={handleChange}
					data={currentRows}
				/>
				<Pagination
					totalRows={totalRows}
					rowsPerPage={rowsPerPage}
					currentPage={currentPage}
					paginate={paginate}
					onChange={rowChange}
				/>
			</DivContainer>
		</>
	);
});

export default EmployeeTable;
