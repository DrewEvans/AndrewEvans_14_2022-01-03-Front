import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;



const CustomSelect = ({
  options,
  label,
  onClick
} )=> {

  const [selectedOption, setSelectedOption] = useState('');

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked =  (e) => {
    setSelectedOption(e.target.innerText);
    onClick(e)
    setIsOpen(false);
  };

  return (
    <>
      <label>{label}</label>
      <div>
        <h1 onClick={toggling}>
          {selectedOption || 'Choose an option'}
          {!isOpen && <span>{angleUp}</span>}
          {isOpen && <span>{angleDown}</span>}
        </h1>
        {isOpen && (
          <div>
            <ul role="listbox" name="pets" id="pet-select" onChange={onClick}>
              {options.map((option, i) => (
                <li
                 value={option}
                 role="option"
                 onClick={onOptionClicked}
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

export default CustomSelect