import React from 'react';
import './filterandsearch.css';
import TypeFilter from '../../components/type_filter';
import DateFilter from '../../components/date_filter';
import Search from '../../components/searchbar';

export default function FilterandSearch({ onSearch, onTypeFilter, onDateFilter, types }) {
 
  return (
    <>
      <div className='fl_sc_div'>
        <div className='filter'>
         <TypeFilter onFilterChange={onTypeFilter} types={types}/>
         <DateFilter onFilter={onDateFilter} />
        </div>
        <div className='searchbar'>
          <Search onSearch={onSearch} />
        </div>
      </div>
      
    </>
  );
}
