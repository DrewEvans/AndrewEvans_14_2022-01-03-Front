import React, { useState } from "react";

function Form({children, renderChildren}) {

	const [value, setValue] = useState({values: ""})

	const handleChange = (event) => {
		this.setState({value: event.target.value});
	  }
	
	  const handleSubmit = (event) => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	  }

return(
<form onSubmit={handleSubmit}>
<label>
  Name:
  <input type="text" value={value} onChange={handleChange} />
</label>
<input type="submit" value="Submit" />
</form>
)}

export default Form;
