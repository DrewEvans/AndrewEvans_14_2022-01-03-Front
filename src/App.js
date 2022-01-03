import { DropdownField } from "react-formzie";

const list = ["ellie", "tim", "bob", "jim"];
const label = "Dropdown Component Lib";

function App() {
	return (
		<>
			<DropdownField label={label} array={list} />
		</>
	);
}

export default App;
