import React from "react";

function Form({ children, title }) {
	const renderChildren = (child) => <>{child}</>;

	children.map((child) => {
		console.log(
			Object.keys(child.props).map((e) => ({
				prop: e,
				count: child.props[e],
			}))
		);
	});
	return (
		<form>
			{<h1>{title}</h1>}
			{children.map((child) => {
				return child;
			})}
		</form>
	);
}

export default Form;
