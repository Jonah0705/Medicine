import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Information from './Information';

const API = ({ searchTerm }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [fetchingdata, setFetchingdata] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      var page = 1;
      try {
        setFetchingdata(true);
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name+AND+_exists_:purpose:${encodeURIComponent(searchTerm)}&limit=15&skip=${page * 10 - 10}`);
        const result = await response.json();
        setData(result);
        setError(false);
        setResults(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setData(null);
      } finally {
        setFetchingdata(false); 
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {!error && results && !fetchingdata ? (
        <>
          <h2 className='mb-5'>Results:</h2>
          {results.map((result, index) => (
            <div key={index} className='mb-5 flex flex-wrap'>
              <Card className="mt-6 w-96">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {result.openfda.brand_name && result.openfda.brand_name[0]}
                  </Typography>
                  <Typography>
                    {result.purpose && result.purpose[0]}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Information name={result.openfda.brand_name}/>
                </CardFooter>
              </Card>
            </div>
          ))}
        </>
      ) : fetchingdata ? (
        <Spinner />
      ) : (
        <div className='error'>
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
};

export default API;




