import { lazy, Suspense, useState } from "react";
// import {
//   Formzie,
//   SelectDropdown,
//   SubmitButton,
//   FieldList,
// } from "react-formzie";
// import Form from "./Form";
import InputField from "./InputField";

const Form = lazy(() => import("./Form"));

const list = ["Sales", "HR", "Marketing", "Finance"];

function App() {
  const [values, setValues] = useState({});

  //listens to any changes made in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set state with new data on e
    setValues({ ...values, [name]: value });
  };
  //   const handleClick = {
  //     department: (e) => {
  //       const { innerText } = e.target;
  //       //set state with new data on e
  //       setValues({ ...values, department: innerText });
  //     },
  //     state: (e) => {
  //       const { innerText } = e.target;
  //       //set state with new data on e
  //       setValues({ ...values, state: innerText });
  //     },
  //   };

  //   console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <div style={style}>
          <Form title={"Formzie"}>
            <InputField
              controlType={"input"}
              labelHeader='First Name'
              type='text'
              idNameHtml='firstName'
              onChange={handleChange}
            />
            <InputField
              controlType={"input"}
              labelHeader='Last Name'
              type='text'
              idNameHtml='lastName'
              onChange={handleChange}
            />
            <InputField
              controlType={"input"}
              labelHeader='Date of Birth'
              type='date'
              idNameHtml='dateOfBirth'
              onChange={handleChange}
            />
            <InputField
              controlType={"input"}
              labelHeader='Start Date'
              type='date'
              idNameHtml='startDate'
              onChange={handleChange}
            />
            <InputField
              controlType={"input"}
              labelHeader='Street'
              type='text'
              idNameHtml='street'
              onChange={handleChange}
            />
            <InputField
              controlType={"input"}
              labelHeader='City'
              type='text'
              idNameHtml='city'
              onChange={handleChange}
            />
            <InputField
              controlType={"select"}
              labelHeader={"State"}
              idNameHtml={"state"}
              onChange={handleChange}
              options={["MD", "MA", "MS", "MO", "NE"]}
            />
            <InputField
              controlType={"input"}
              labelHeader='Zip Code'
              type='text'
              idNameHtml='number'
              minLength={5}
              onChange={handleChange}
            />
            <InputField
              controlType={"select"}
              labelHeader={"Department"}
              idNameHtml={"department"}
              onChange={handleChange}
              options={list}
            />
            <InputField
              controlType={"submit"}
              onClick={handleSubmit}
              buttonText='Submit'
            />

            {/* <FieldList
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
          <SubmitButton text='submit' /> */}
          </Form>
        </div>
      </Suspense>
    </>
  );
}

export default App;
