import React from 'react';
import Dropdown from './ui/dropdown';

const DateFilter = ({ onFilter }) => {
  const options = [
    { value: '', label: 'All' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
  ];

  const handleSelect = (option) => {
    onFilter(option.value);
  };

  return (
    <Dropdown
      options={options}
      onSelect={handleSelect}
      placeholder="Filter by Date"
    />
  );
}

export default DateFilter;
