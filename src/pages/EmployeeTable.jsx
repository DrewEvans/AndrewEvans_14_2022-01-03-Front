import MaterialTable from "material-table";
import React from "react";

const EmployeeTable = ({ data }) => {
	const columns = [
		{ title: "City", field: "city" },
		{ title: "Date of Birth", field: "dateOfBirth" },
		{ title: "Department", field: "department" },
		{ title: "First Name", field: "firstName" },
		{ title: "Last Name", field: "lastName" },
		{ title: "Start Date", field: "startDate" },
		{ title: "State", field: "state" },
		{ title: "Street", field: "street" },
		{ title: "Zip Code", field: "zipCode" },
	];
	return (
		<>
			<MaterialTable
				title={"Employees"}
				columns={columns}
				data={data.body}
			/>
		</>
	);
};

export default EmployeeTable;
