import { SelectDropdown, SubmitButton } from "react-formzie";
import ClassicField from "./ClassicField";
import Form from "./Form";

const list = ["tim", "bob", "jim"];
const label = "Dropdown Component Lib";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("gather Values as submit");
  };

  const collectFieldValues = {
    select: (value) => {
      console.log(value);
    },
  };

  return (
    <>
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
      />
      <Form renderChildren={(child) => <>{child}</>}>
        <ClassicField labelName='firstName' name='firstName' inputType='text' />
        <ClassicField labelName='lastName' name='lastName' inputType='text' />
        <ClassicField labelName='email' name='email' inputType='email' />
        <ClassicField
          labelName='Accept T&Cs'
          name='terms'
          inputType='checkbox'
        />
      </Form>
    </>
  );
}

export default App;
