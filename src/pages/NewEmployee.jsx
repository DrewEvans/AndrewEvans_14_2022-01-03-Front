import React, { Suspense, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import lazy from "react-lazy-named";
import axios from "axios";
import useForm from "../hooks/useForm";
import useKeyPress from "../hooks/useKeyPress";
import validate from "../helpers/newEmployeeFormValidation";
import styled from "styled-components";
import heroImage from "../assets/9814.avif";
import { statesArray } from "./statesArray";

const Formzie = lazy(() => import("react-formzie"), "Formzie");
const InputField = lazy(() => import("react-formzie"), "InputField");
const Modal = lazy(() => import("react-formzie"), "Modal");

const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 3em;

	@media (min-width: 320px) and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
	}
`;

const BottomCurve = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 300px;
	background-color: #818f3a;
	clip-path: ellipse(141% 100% at 140.09% 100%);
	z-index: -1000;
`;
const TopCurve = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 300px;
	background-color: #93ad16;
	clip-path: ellipse(55% 65% at 35% 15%);
	z-index: -1000;

	@media (min-width: 320px) and (max-width: 768px) {
		clip-path: ellipse(85% 65% at 35% 15%);
	}
`;

const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: flex-start;
	margin-top: 5em;
	@media (min-width: 320px) and (max-width: 768px) {
		align-self: center;
	}
`;

const HeroHeader = styled.h1`
	margin: 0 0 4em 0;
	font-size: 2em;
	color: white;
	@media (min-width: 320px) and (max-width: 768px) {
		margin: 0em 1em 1em 1em;
		text-align: center;
	}
`;

const HeroImg = styled.img`
	font-size: 2em;
	color: #93ad16;
	width: 450px;
	height: 325px;
	content: url(${heroImage});
	@media (min-width: 320px) and (max-width: 768px) {
		visibility: hidden;
		display: none;
		content: url("${heroImage}");
	}
`;

const HeroButton = styled.button`
	font-family: inherit;
	width: 50%;
	align-self: center;
	height: 2em;
	border: none;
	border-radius: 3px;
	outline: none;
	background: #93ad16;
	color: #fff;
	font-size: 1.25em;
	margin: 1em 0;
	text-align: center;
	box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.6);
	position: relative;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.15s ease-in-out;

	&:hover {
		background-color: #818f3a;
		transform: translateY(-3px);
		box-shadow: 2px 6px 20px -5px rgba(0, 0, 0, 0.8);
	}

	@media (min-width: 320px) and (max-width: 768px) {
		background-color: #818f3a;
	}
`;

const FormContainer = styled.div`
display: flex,
justifyContent: center;
background-color: #fff;
border-radius: 15px;
margin-top: 1.55em;
width: 450px;
height: 850px;
box-shadow: 2px 6px 20px -5px rgba(0, 0, 0, 0.6);

@media (min-width: 320px) and (max-width: 768px) {
margin: 0;
width: 365px;
  }
`;

const list = ["Sales", "HR", "Marketing", "Finance"];

const NewEmployee = React.memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const [res, setRes] = useState({
		data: null,
		error: null,
		isLoading: false,
	});
	const { handleChange, values } = useForm(validate);
	const { keyPressed } = useKeyPress("Escape");
	const navigate = useNavigate();

	const handleOpen = (e) => {
		if (!isOpen) {
			setIsOpen(true);
		} else if (
			(isOpen && e.target.classList.contains("modal-cross")) ||
			e.target.classList.contains("wrapper")
		) {
			setIsOpen(false);
		}

		if (res.data != null) {
			if (
			  (res.data.data.status === 200 &&
				e.target.classList.contains("modal-cross")) ||
			  e.target.classList.contains("wrapper")
			) {
			  window.location.reload(false);
			}
		  }
		};

	if (isOpen && keyPressed) {
		setIsOpen(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setRes((prevState) => ({ ...prevState, isLoading: true }));
		
		axios
			.post("https://wealth-health.herokuapp.com/api/employees/create", {
				city: values.city,
				dateOfBirth: values.dateOfBirth,
				department: values.department,
				firstName: values.firstName,
				lastName: values.lastName,
				startDay: values.startDate,
				state: values.state,
				street: values.street,
				zipCode: values.zipCode,
			})
			.then((res) => {
				setRes({ data: res, isLoading: false, error: null });
			})
			.catch((error) => {
				setRes({ data: null, isLoading: false, error });
			});
		handleOpen();
	};

	const handleClick = () => {
		window.location.reload(false);
		navigate("/employee-table");
	};

	return (
		<Main>
			<TopCurve></TopCurve>
			<HeroContainer>
				<HeroHeader>New Employee Creation Form</HeroHeader>
				<HeroImg alt='hero-image' />
				<HeroButton onClick={handleClick} type='button'>
					View Employees
				</HeroButton>
			</HeroContainer>
			<Suspense fallback={<div>...Loading</div>}>
				<FormContainer>
					<Formzie>
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
			</Suspense>
			<Suspense fallback={<></>}>
				{isOpen && (
					<Modal onClick={handleOpen}>
						{res.data && (
							<div>
								<strong>{res.data.data.message}:</strong>
								<p>
									{res.data.data.body.firstName}{" "}
									{res.data.data.body.lastName} can be viewed
									on the{" "}
									<NavLink to='employee-table'>
										Current Employees
									</NavLink>{" "}
									table
								</p>
							</div>
						)}
						{res.error && (
							<div>
								<strong>Missing Information:</strong>
								<p>Ensure all fields are filled in correctly</p>
							</div>
						)}
					</Modal>
				)}
			</Suspense>
			<BottomCurve></BottomCurve>
		</Main>
	);
});

export default NewEmployee;
