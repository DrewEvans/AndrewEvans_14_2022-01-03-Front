import EmployeeTable from "./pages/EmployeeTable";
import NewEmployee from "./pages/NewEmployee";
import useFetch from "./hooks/useFetch";

const App = () => {
	const { data, loading } = useFetch("http://localhost:5000/api/employees");
	return (
		<>
			<NewEmployee />
			{data && <EmployeeTable data={data} />}
		</>
	);
};

export default App;
