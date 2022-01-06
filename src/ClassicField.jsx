import { useState } from "react";

function ClassicField({ labelName, name, inputType }) {
	const [value, setValue] = useState();
	return (
		<>
			<label>{labelName}</label>
			<br />
			<input
				name={name}
				type={inputType}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
}

export default ClassicField;
