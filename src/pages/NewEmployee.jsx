import React, { Suspense, useState } from "react";
import lazy from "react-lazy-named";
import useForm from "../hooks/useForm";
import useKeyPress from "../hooks/useKeyPress";
import validate from "../helpers/newEmployeeFormValidation";
import styled from "styled-components";

const Formzie = lazy(() => import("react-formzie"), "Formzie");
const InputField = lazy(() => import("react-formzie"), "InputField");
const Modal = lazy(() => import("react-formzie"), "Modal");

const FormContainer = styled.div`
  display: flex,
  justifyContent: center,
`;

const list = ["Sales", "HR", "Marketing", "Finance"];

const NewEmployee = React.memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const { handleChange, values, errors } = useForm(validate);
	const { keyPressed } = useKeyPress("Escape");

	const handleOpen = (e) => {
		if (!isOpen) {
			setIsOpen(true);
		} else if (
			(isOpen && e.target.classList.contains("modal-cross")) ||
			e.target.classList.contains("wrapper")
		) {
			setIsOpen(false);
			values = {};
		}
	};

	if (isOpen && keyPressed) {
		setIsOpen(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		handleOpen();
	};

	const statesArray = [];

	for (const key in states) {
		if (Object.hasOwnProperty.call(states, key)) {
			const element = states[key];
			statesArray.push(`${element.abbreviation} - ${element.name}`);
		}
	}

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
							options={statesArray}
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
});

export default NewEmployee;

const states = [
	{
		name: "Alabama",
		abbreviation: "AL",
	},
	{
		name: "Alaska",
		abbreviation: "AK",
	},
	{
		name: "American Samoa",
		abbreviation: "AS",
	},
	{
		name: "Arizona",
		abbreviation: "AZ",
	},
	{
		name: "Arkansas",
		abbreviation: "AR",
	},
	{
		name: "California",
		abbreviation: "CA",
	},
	{
		name: "Colorado",
		abbreviation: "CO",
	},
	{
		name: "Connecticut",
		abbreviation: "CT",
	},
	{
		name: "Delaware",
		abbreviation: "DE",
	},
	{
		name: "District Of Columbia",
		abbreviation: "DC",
	},
	{
		name: "Federated States Of Micronesia",
		abbreviation: "FM",
	},
	{
		name: "Florida",
		abbreviation: "FL",
	},
	{
		name: "Georgia",
		abbreviation: "GA",
	},
	{
		name: "Guam",
		abbreviation: "GU",
	},
	{
		name: "Hawaii",
		abbreviation: "HI",
	},
	{
		name: "Idaho",
		abbreviation: "ID",
	},
	{
		name: "Illinois",
		abbreviation: "IL",
	},
	{
		name: "Indiana",
		abbreviation: "IN",
	},
	{
		name: "Iowa",
		abbreviation: "IA",
	},
	{
		name: "Kansas",
		abbreviation: "KS",
	},
	{
		name: "Kentucky",
		abbreviation: "KY",
	},
	{
		name: "Louisiana",
		abbreviation: "LA",
	},
	{
		name: "Maine",
		abbreviation: "ME",
	},
	{
		name: "Marshall Islands",
		abbreviation: "MH",
	},
	{
		name: "Maryland",
		abbreviation: "MD",
	},
	{
		name: "Massachusetts",
		abbreviation: "MA",
	},
	{
		name: "Michigan",
		abbreviation: "MI",
	},
	{
		name: "Minnesota",
		abbreviation: "MN",
	},
	{
		name: "Mississippi",
		abbreviation: "MS",
	},
	{
		name: "Missouri",
		abbreviation: "MO",
	},
	{
		name: "Montana",
		abbreviation: "MT",
	},
	{
		name: "Nebraska",
		abbreviation: "NE",
	},
	{
		name: "Nevada",
		abbreviation: "NV",
	},
	{
		name: "New Hampshire",
		abbreviation: "NH",
	},
	{
		name: "New Jersey",
		abbreviation: "NJ",
	},
	{
		name: "New Mexico",
		abbreviation: "NM",
	},
	{
		name: "New York",
		abbreviation: "NY",
	},
	{
		name: "North Carolina",
		abbreviation: "NC",
	},
	{
		name: "North Dakota",
		abbreviation: "ND",
	},
	{
		name: "Northern Mariana Islands",
		abbreviation: "MP",
	},
	{
		name: "Ohio",
		abbreviation: "OH",
	},
	{
		name: "Oklahoma",
		abbreviation: "OK",
	},
	{
		name: "Oregon",
		abbreviation: "OR",
	},
	{
		name: "Palau",
		abbreviation: "PW",
	},
	{
		name: "Pennsylvania",
		abbreviation: "PA",
	},
	{
		name: "Puerto Rico",
		abbreviation: "PR",
	},
	{
		name: "Rhode Island",
		abbreviation: "RI",
	},
	{
		name: "South Carolina",
		abbreviation: "SC",
	},
	{
		name: "South Dakota",
		abbreviation: "SD",
	},
	{
		name: "Tennessee",
		abbreviation: "TN",
	},
	{
		name: "Texas",
		abbreviation: "TX",
	},
	{
		name: "Utah",
		abbreviation: "UT",
	},
	{
		name: "Vermont",
		abbreviation: "VT",
	},
	{
		name: "Virgin Islands",
		abbreviation: "VI",
	},
	{
		name: "Virginia",
		abbreviation: "VA",
	},
	{
		name: "Washington",
		abbreviation: "WA",
	},
	{
		name: "West Virginia",
		abbreviation: "WV",
	},
	{
		name: "Wisconsin",
		abbreviation: "WI",
	},
	{
		name: "Wyoming",
		abbreviation: "WY",
	},
];
