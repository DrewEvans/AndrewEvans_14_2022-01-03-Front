import { useEffect, useState } from "react";

export const SelectDropdown = ({ options, collectValue }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	useEffect(() => {
		setSelectedOption(options[0]);
	}, []);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		collectValue(value);
		setIsOpen(false);
	};

	return (
		<>
			<h1>Custom Select/dropdown</h1>
			<div>
				<div onClick={toggling}>
					{selectedOption || "Choose an option"}
				</div>
				{isOpen && (
					<div>
						<ul>
							{options.map((option, i) => (
								<li
									onClick={onOptionClicked(option)}
									key={`selectDropdown-${i++}`}
								>
									{option}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};
