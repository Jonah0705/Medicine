import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Apitest = () => {
  const [medicinesData, setMedicinesData] = useState(null);
  const [page, setPage] = useState(2); // Assuming an initial page value of 1

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '75bba4c67e0a4620a4b11ad7fc76bdb5';
        const apiUrl = 'https://api.nhs.uk/medicines';

        const response = await axios.get(apiUrl, {
          headers: {
            'subscription-key': apiKey,
          },
          params: {
            page: page,
            // Add other parameters as needed
          },
        });

        setMedicinesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // Include 'page' in the dependency array so that the effect runs when 'page' changes

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">NHS Medicines Data</h1>
        {medicinesData ? (
          <pre className="max-w-screen-3xl mx-auto">{JSON.stringify(medicinesData, null, 2)}</pre>
        ) : (
          <p>
            <Spinner />
          </p>
        )}
      </div>
    </div>
  );
};

export default Apitest;






