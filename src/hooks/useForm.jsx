import { useState } from "react";

const useForm = (validate, id, onClose) => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	//listens to any changes made in the input fields
	const handleChange = (e) => {
		const { name, value } = e.target;
		//set state with new data on e
		setValues({ ...values, [name]: value });
		//pass values to validate to test and set errors if any recorded
		setErrors(validate(values));
	};

	const submitForm = () => {
		//if no error objects are present push data to server and log user data
		if (!errors.firstName && !errors.lastName && !errors.email) {
	
			console.log(
		values
			);
		
		} else {
			return console.log(
				" %c Errors Present",
				
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm();
	};

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;