import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import HondaWmiTable from "./HondaWmiTable"
function HondaWmi() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selCountry, setSelCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    axios.get('https://localhost:7073/api/HondaWmi/countries')
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDropdownSelect = (selectedValue) => {
    setSelCountry(selectedValue);
  };


  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };



  useEffect(() => {
    fetchData();
  }, [selCountry, searchTerm]);

  const fetchData = async () => {
    const queryParams = {};
    if (selCountry) {
      queryParams.country = selCountry;
    }
    if (searchTerm) {
      queryParams.search = searchTerm;
    }

    setIsLoading(true)

    try {
      const response = await axios.get('https://localhost:7073/api/HondaWmi', { params: queryParams, });
      setData(response.data);
      setIsLoading(false)

    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false)
    }
  };

  return (
    <div>
      <h3 className='page-caption'>Honda WMI Information</h3>
      <hr />
      <div className='div-filter'>
        <div className='div-frm'>
          <span className='pr-15px'>Country </span>
          <Dropdown options={options} onSelect={handleDropdownSelect} />

          <span className='pr-15px pl-30px'>Search in WMI</span>
          <SearchBox
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
          />
        </div>
      </div>

      <div className='tab-div'>
        {!isLoading && <HondaWmiTable data={data} />}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default HondaWmi;
