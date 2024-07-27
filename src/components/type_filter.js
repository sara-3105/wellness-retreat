import React from 'react';
import Dropdown from './ui/dropdown';

const TypeFilter = ({ onFilterChange, types }) => {
  const options = types.map(type => ({ label: type.charAt(0).toUpperCase() + type.slice(1), value: type })); //converting the first letter of the type to uppercase to use it as label 

  const handleSelect = (option) => {
    onFilterChange(option.value);
  };
  
  return (
    <Dropdown
      options={options}
      onSelect={handleSelect}
      placeholder="Filter by retreat type"
    />
  );
};

export default TypeFilter;
