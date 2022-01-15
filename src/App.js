import { Suspense, useState } from "react";
import { Formzie, InputField, Modal } from "react-formzie";
import useForm from "./hooks/useForm";
import useFetch from "./hooks/useFetch";
import useKeyPress from "./hooks/useKeyPress";
import validate from "./helpers/newEmployeeFormValidation";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex,
  justifyContent: center,
`;

const list = ["Sales", "HR", "Marketing", "Finance"];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleChange, values, errors } = useForm(validate);
  const { data, loading } = useFetch("http://localhost:5000/api/employees");
  console.log(useKeyPress("Escape"));

  useKeyPress("Enter") === True ? console.log("close") : null;

  // if (loading === false && data) {
  //   console.log(data.body);
  // }

  const handleOpen = (e) => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (
      (isOpen && e.target.classList.contains("modal-cross")) ||
      e.target.classList.contains("wrapper")
    ) {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <FormContainer>
          <Formzie title={"Formzie"}>
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
              type='number'
              idNameHtml='zipCode'
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
          </Formzie>
        </FormContainer>
        {isOpen && (
          <Modal onClick={handleOpen}>
            <p>i need this to go </p>
          </Modal>
        )}
      </Suspense>
    </>
  );
}

export default App;
