import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';

const Dropdown = ({ 
    options, 
    onSelect, 
    placeholder = 'Select an option', 
    className = ''
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
  
    const handleToggle = () => setIsOpen(!isOpen);
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); // functionality added when clicked outside the dropdown it should get closed

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown-toggle ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        <span className='dropdown-placeholder'>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className={`dropdown-arrow ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;