import { useState } from "react";
import {
  Formzie,
  SelectDropdown,
  SubmitButton,
  FieldList,
} from "react-formzie";

const list = ["Sales", "HR", "Marketing", "Finance"];

function App() {
  const [values, setValues] = useState({});

  //listens to any changes made in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set state with new data on e
    setValues({ ...values, [name]: value });
  };
  const handleClick = {
    department: (e) => {
      const { innerText } = e.target;
      //set state with new data on e
      setValues({ ...values, ["department"]: innerText });
    },
    state: (e) => {
      const { innerText } = e.target;
      //set state with new data on e
      setValues({ ...values, ["state"]: innerText });
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("gather Values as submit");
  };

  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div style={style}>
        <Formzie title='Formzie' renderChildren={(child) => <>{child}</>}>
          <FieldList
            labelHeader='FirstName'
            type='text'
            idNameHtml='firstName'
            onChange={handleChange}
            value={values.firstName}
          />
          <FieldList
            labelHeader='Last Name'
            type='text'
            idNameHtml='lastName'
            onChange={handleChange}
            value={values.lastName}
          />
          <FieldList
            labelHeader='Date of Birth'
            type='date'
            idNameHtml='dateOfBirth'
            onChange={handleChange}
            value={values.dateOfBirth}
          />
          <FieldList
            labelHeader='Start Date'
            type='date'
            idNameHtml='startDate'
            onChange={handleChange}
            value={values.startDate}
          />
          <FieldList
            labelHeader='Street'
            type='text'
            idNameHtml='street'
            onChange={handleChange}
            value={values.street}
          />
          <FieldList
            labelHeader='City'
            type='text'
            idNameHtml='city'
            onChange={handleChange}
            value={values.city}
          />
          <SelectDropdown
            label='State'
            onClick={handleClick.state}
            options={["MD", "MA", "MS", "MO", "NE"]}
          />
          <FieldList
            labelHeader='Zip'
            type='number'
            idNameHtml='zipCode'
            onChange={handleChange}
            value={values.zipCode}
          />
          <SelectDropdown
            label='Department'
            options={list}
            onClick={handleClick.department}
            value={values.department}
          />
        </Formzie>
        {console.log(values)}
      </div>
    </>
  );
}

export default App;
