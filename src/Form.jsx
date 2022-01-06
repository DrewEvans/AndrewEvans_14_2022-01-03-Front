import React from "react";

function Form({ children, title }) {
	const renderChildren = (child) => <>{child}</>;

	return (
		<form>
			<h1>{title}</h1>
			{renderChildren(children)}
		</form>
	);
}

export default Form;
