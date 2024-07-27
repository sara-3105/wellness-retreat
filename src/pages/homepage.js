import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../sections/Header_Section/header'
import HeroSection from '../sections/HERO section/hero'
import FilterandSearch from '../sections/Filter&Search/filterandsearch'
import CardsSection from '../sections/Cards_Section/cards_section'
import Pagination from '../components/pagination';
import { Footer } from '../sections/Footer/footer_section';

const HomePage = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const retreatsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, []);

  const fetchRetreats = async () => {
    try {
      const response = await axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
      setRetreats(response.data);
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  const getUniqueTypes = (retreats) => {
    const allTypes = retreats.flatMap(retreat => retreat.tag);
    const uniqueTypes = ['all Types', ...new Set(allTypes)];
    return uniqueTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterRetreats(query, typeFilter, dateFilter);
  };

  const handleTypeChange = (type) => {
    setTypeFilter(type === 'All Types' ? '' : type);
    filterRetreats(searchQuery, type === 'All Types' ? '' : type, dateFilter);
  };

  const handleDateChange = (year) => {
    setDateFilter(year);
    filterRetreats(searchQuery, typeFilter, year);
  };

  const filterRetreats = (search, type, year) => {
    let filtered = retreats;
    if (search) {
      filtered = filtered.filter(retreat => retreat.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (type) {
      filtered = filtered.filter(retreat => type === '' || retreat.tag.some(t => t.toLowerCase() === type.toLowerCase()));
    }
    if (year) {
      filtered = filtered.filter(retreat => {
        const retreatYear = new Date(retreat.date * 1000).getFullYear();
        return retreatYear === parseInt(year, 10);
      });
    }
    setCurrentPage(1);
    setFilteredRetreats(filtered);

     // Set error message if no retreats are found
     if (filtered.length === 0) {
      setErrorMessage('No retreats found. Please try adjusting your filters.');
    } else {
      setErrorMessage('');
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredRetreats.length / retreatsPerPage)));
  };

  const indexOfLastRetreat = currentPage * retreatsPerPage;
  const indexOfFirstRetreat = indexOfLastRetreat - retreatsPerPage;
  const currentRetreats = filteredRetreats.slice(indexOfFirstRetreat, indexOfLastRetreat);
  const totalPages = Math.ceil(filteredRetreats.length / retreatsPerPage);
  const uniqueTypes = getUniqueTypes(retreats);
    
    return(
    <>
    <Header/>
    <HeroSection/>
    <FilterandSearch
        onSearch={handleSearchChange}
         onTypeFilter={handleTypeChange}
         onDateFilter={handleDateChange}
         types={uniqueTypes}
    />
      {errorMessage ? (
        <div className="error-message" style={{textAlign:'center', margin:'5vw', fontSize:'20px'}}>
          {errorMessage}
        </div>
      ) : (
        <CardsSection retreats={currentRetreats} />
      )}
    <Pagination 
    currentPage={currentPage}
    totalPages={totalPages}
    handlePrevPage={handlePrevPage}
    handleNextPage={handleNextPage}
    />
    <Footer/>
    </>

    )
}
  
export default HomePage