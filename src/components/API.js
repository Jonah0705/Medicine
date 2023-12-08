import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

const API = ({ searchTerm }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name:${encodeURIComponent(searchTerm)}&limit=10&skip=10`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (!data) {
    return <Spinner />;
  }

  const results = data.results;

  return (
    <div>
      {results.map((result, index) => (
        <><h2 className='mb-5'> Results: </h2>
        <div key={index} className='mb-5 flex flex-wrap'>
          <p className='mb-2.5'>Brand Name: {result.openfda.brand_name && result.openfda.brand_name[0]}</p>
          <p className='mb-2.5'>Warnings: {result.warnings && result.warnings[0]}</p>
          <p className='mb-2.5'>Do Not Use: {result.do_not_use && result.do_not_use[0]}</p>
          <p className='mb-2.5'>Ask Doctor: {result.ask_doctor && result.ask_doctor[0]}</p>
          <p className='mb-2.5'>When Using: {result.when_using && result.when_using[0]}</p>
          <p className='mb-2.5'>Stop Use: {result.stop_use && result.stop_use[0]}</p>
          <p className='mb-2.5'>Indications and Usage: {result.indications_and_usage && result.indications_and_usage[0]}</p>
          <p className='mb-2.5'>Purpose: {result.purpose && result.purpose[0]}</p>
          <p className='mb-2.5'>Active Ingredient: {result.active_ingredient && result.active_ingredient[0]}</p>
          <p className='mb-2.5'>Other Safety Information: {result.other_safety_information && result.other_safety_information[0]}</p>
          <p className='mb-2.5'>Dosage and Administration: {result.dosage_and_administration && result.dosage_and_administration[0]}</p>
        </div></>
      ))}
    </div>
  );
};

export default API;


