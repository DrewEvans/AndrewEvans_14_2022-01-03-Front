import {
	FieldList,
	Formzie,
	SelectDropdown,
	SubmitButton,
} from "react-formzie";
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

			<ClassicField
				labelName='firstName'
				name='firstName'
				inputType='text'
			/>
			<ClassicField
				labelName='Accept T&Cs'
				name='terms'
				inputType='checkbox'
			/>

			<Form title='Formzie Form'>
				<FieldList
					label='email'
					type='email'
					name='email'
					placeholder='e.g email'
				/>
				<FieldList
					label='name'
					type='text'
					name='name'
					placeholder='e.g john'
				/>
				<FieldList label='password' type='password' name='password' />
				<SelectDropdown
					label={label}
					options={list}
					collectValue={collectFieldValues.select}
				/>
				<SubmitButton
					text='Submit'
					backgroundColor='advocado'
					size='lg'
				/>
			</Form>
		</>
	);
}

export default App;
