import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { sortArray } from "../helpers/sortEmployeeHeaders";
import { searchEmployee } from "../helpers/searchEmployee";
import { siblingNodeDirection } from "../helpers/siblingNodeDirection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./styles/tableStyle.css";

const Pagination = lazy(() => import("../components/Pagination"));
const Table = lazy(() => import("../components/Table"));

const backButton = (
  <FontAwesomeIcon className='back-btn' icon={faArrowCircleLeft} />
);

const BackButton = styled.div`
  position: absolute;
  font-size: 2.5em;
  top: 0.5em;
  left: 1em;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Main = styled.main`
  margin: 0;
`;
const BottomCurve = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #818f3a;
  clip-path: ellipse(140% 50% at 140.09% 100%);
  z-index: -1000;
`;
const TopCurve = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #93ad16;
  clip-path: ellipse(141% 55% at 140% 1%);
  z-index: -1000;

  @media (min-width: 320px) and (max-width: 768px) {
    clip-path: ellipse(85% 65% at 35% 15%);
  }
`;

const DivContainer = styled.div`
	margin: 0 auto;
	margin-bottom 2em;
	padding: .5em;
	width: 90%;
	box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	background-color: #fff;
	border-radius: 10px;
	border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Header = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
`;

const EmployeeTable = React.memo(({ data }) => {
  const [currentRows, setCurrentRows] = useState([]); //default rows is set to blank array
  const [currentPage, setCurrentPage] = useState(1); // default pagination default is 1
  const [rowsPerPage, setRowsPerPage] = useState(10); //default records per page is 10
  const [sortDirection, setSortDirection] = useState(""); // default sort direction is blank
  const [searchKey, setSearchKey] = useState(""); //default search input is blank

  //last page number based on rows per page
  const indexofLastRow = currentPage * rowsPerPage;
  //first page number based on how many rows per page
  const indexOfFirstRow = indexofLastRow - rowsPerPage;

  //obtain how records will be listed
  const totalRows = Math.ceil(data.body.length);

  //react-router useNav hook
  let navigate = useNavigate();

  //on page load set the number of pages the user can paginate through
  useEffect(() => {
    setCurrentRows(data.body.slice(indexOfFirstRow, indexofLastRow));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, rowsPerPage]);

  //Click event listener to enable the sort direction of the data presented by column
  const handleClick = (e) => {
    //column header
    const value = e.target.innerText.toLowerCase().replace(/\s+/g, "");

    //call sort direction updating the clicks siblings
    setSortDirection(siblingNodeDirection(e));

    //if search key is present on sort only sort on the filtered array else sort all
    if (searchKey.length > 0) {
      setCurrentRows(sortArray(value, currentRows, sortDirection));
    } else {
      setCurrentRows(sortArray(value, currentRows, sortDirection));
    }
  };

  // listen for user input in search bar returning the values that match the search key
  const handleChange = (e) => {
    setSearchKey(e.target.value);

    //if search key is present show all records matching criteria else setState to display all
    searchKey
      ? setCurrentRows(searchEmployee(data.body, searchKey))
      : setCurrentRows(data.body.slice(indexOfFirstRow, indexofLastRow));
  };

  //sets the page number to which the user should be currently viewing
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //listens if user has changed the display rows per page
  const rowChange = (e) => {
    setRowsPerPage(e.target.value);
    setCurrentPage(1);
  };

  //redirect to homepage ocClick
  const handleNavigate = () => {
    navigate("/");
  };

  //array of objects to define columns for the table component
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
      <BackButton onClick={handleNavigate}>{backButton}</BackButton>
      <TopCurve />
      <Header>Current Employees</Header>
      <DivContainer>
        <Suspense fallback={<></>}>
          <Table
            tableConfig={tableConfig}
            onClick={handleClick}
            onChange={handleChange}
            data={currentRows}
          />
        </Suspense>
        <Suspense fallback={<></>}>
          <Pagination
            totalRows={totalRows}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            paginate={paginate}
            onChange={rowChange}
          />
        </Suspense>
      </DivContainer>
      <BottomCurve />
    </Main>
  );
});

export default EmployeeTable;
