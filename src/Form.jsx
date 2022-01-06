import React from "react";

<<<<<<< HEAD
function Form({ children, title }) {
	const renderChildren = (child) => <>{child}</>;

	return (
		<form>
			<h1>{title}</h1>
			{renderChildren(children)}
		</form>
	);
=======
function Form({children, renderChildren}) {
	console.log()
	console.log(children)
	
	return <div><h1></h1>{renderChildren(children)}</div>;
>>>>>>> 9ea5e82235b288c94bc0c5be5c6f5e6a9df4427c
}

export default Form;
