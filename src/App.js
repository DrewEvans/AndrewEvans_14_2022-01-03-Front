import { useState } from "react";
import {
  Formzie,
  SelectDropdown,
  SubmitButton,
  FieldList,
} from "react-formzie";
import ClassicField from "./ClassicField";
import Form from "./Form";

const list = ["Sales", "HR", "Marketing", "Finance"];
const label = "Dropdown Component Lib";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    zipCode: "",
    department: "",
    startDate: "",
  });

  //listens to any changes made in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set state with new data on e
    setValues({ ...values, [name]: value });
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
            labelHeader='Email'
            type='email'
            idNameHtml='email'
            onChange={handleChange}
            value={values.email}
          />
          <FieldList
            labelHeader='State'
            type='text'
            idNameHtml='state'
            onChange={handleChange}
            value={values.state}
          />
          <FieldList
            labelHeader='zip'
            type='number'
            idNameHtml='zipCode'
            onChange={handleChange}
            value={values.zipCode}
          />
          <FieldList
            labelHeader='Stat Date'
            type='date'
            idNameHtml='startDate'
            onChange={handleChange}
            value={values.startDate}
          />
          <SelectDropdown
            options={list}
            collectValue={handleChange}
            value={values.department}
          />
        </Formzie>
        {console.log(values)}

        {/* <ClassicField
            labelname='First Name'
            // name='firstName'
            inputType={"text"}
          />
          <FieldList
            label='firstname'
            type='text'
            collectValue={collectFieldValues.firstname}
          />
          <FieldList
            label='last Name'
            type='text'
            collectValue={collectFieldValues.lastname}
          />
          <FieldList
            label='Date of Birth'
            type='date'
            collectValue={collectFieldValues.dob}
          />
          <FieldList
            label='Start Date'
            type='date'
            collectValue={collectFieldValues.startDate}
          />
          <SelectDropdown
            label={label}
            options={list}
            collectValue={collectFieldValues.select}
          />
          <SubmitButton
            text='Submit'
            backgroundColor='#e7a9d7'
            size='lg'
            handleSubmit={handleSubmit}
          /> */}
      </div>
    </>
  );
}

export default App;
