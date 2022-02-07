import { useCallback, useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState();

  //listens to any changes made in the input fields and dynmaically updates state object
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      //set state with new data on e
      setValues({ ...values, [name]: value });
      //pass values to validate to test and set errors if any recorded
    },
    //updates depending on the value of each input field
    [values]
  );

  const submitForm = () => {
    setErrors(validate(values));
    //if no error objects are present push data to server and log user data
    if (Object.keys(errors).length === 0) {
      console.log("no errors, submit values");
    } else {
      return console.log(
        `${Object.keys(errors).length} Error(s) Present`,
        console.log(Object.keys(errors))
      );
    }
  };

  //final phase of submission if errors.length === 0
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
