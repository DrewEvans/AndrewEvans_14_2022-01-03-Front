import { useState } from "react";

function ClassicField({ labelHeader, type, idNameHtml, onChange, value }) {
	return (
		<>
			<label htmlFor={idNameHtml}>{labelHeader}</label>
					<input
						id={idNameHtml}
						name={idNameHtml}
						type={type}
						minLength="2"
						value={value}
						aria-label={labelHeader}
						onChange={onChange}
					/>
		</>
	);
}

export default ClassicField;
