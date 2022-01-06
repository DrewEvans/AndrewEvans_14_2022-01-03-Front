import React from "react";

function Form({children, renderChildren}) {
	console.log()
	console.log(children)
	
	return <div><h1></h1>{renderChildren(children)}</div>;
}

export default Form;
