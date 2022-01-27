import React, { useEffect, useState, lazy, Suspense } from "react";
import { sortArray } from "../helpers/sortEmployeeHeaders";
import { searchEmployee } from "../helpers/searchEmployee";
import { siblingNodeDirection } from "../helpers/siblingNodeDirection";
import styled from "styled-components";
import "./styles/tableStyle.css";

const Pagination = lazy(()=> import("../components/Pagination"));
const Table = lazy(()=> import("../components/Table"));

const Main = styled.main`
margin: 0;
background-color: #93ad16;
`

const DivContainer = styled.div`
	margin: 0 auto;
	margin-bottom 2em;
	padding: .5em;
	width: 85%;
	background-color: #fff;
	border-radius: 15px;
	box-shawdow: 0 6px 20px -5px rgb(0 0 0 / 40%);
`;

const Header = styled.h1`
	color: #f2f2f2;	
	display: flex;
	justify-content: center;
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
		<Main>
			<Header>Current Employees</Header>
			<DivContainer>
				<Suspense fallback={<>...loading</>}>
				<Table
					tableConfig={tableConfig}
					onClick={handleClick}
					onChange={handleChange}
					data={currentRows}
				/>
				</Suspense>
				<Suspense fallback={<>...loading</>}>
				<Pagination
					totalRows={totalRows}
					rowsPerPage={rowsPerPage}
					currentPage={currentPage}
					paginate={paginate}
					onChange={rowChange}
				/>
				</Suspense>
			</DivContainer>
		</Main>
	);
});

export default EmployeeTable;
