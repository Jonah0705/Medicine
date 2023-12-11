import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Pagination  from './Pagination';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import Information from './Information';

const API = ({ searchTerm }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [fetchingdata, setFetchingdata] = useState(null);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const fetchData = async () => {
      var page = 1;
      try {
        setFetchingdata(true);
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=${encodeURIComponent(searchTerm)}+AND+_exists_:openfda.brand_name+AND+_exists_:purpose&limit=12&skip=${currentPage * 10 - 10}`);
        const result = await response.json();
        setData(result);
        setError(false);
        setResults(result.results);
        setMeta(result.meta);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setData(null);
      } finally {
        setFetchingdata(false); 
      }
    };

    fetchData();
  }, [searchTerm, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {!error && results && !fetchingdata ? (
      <><>
          <h2 className='mb-5 text-xl font-bold text-center'>Results: <span>{meta.results.total}</span> items</h2>
          <div className="flex flex-wrap">
            {results.map((result, index) => (
              <div key={index} className='mb-5 flex flex-wrap w-1/3 pl-2'>
                <Card className="mt-6 flex-1 bg-gray-100">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src="/images/medicine_bottle_sized.jpeg"
                      alt="card-image" />
                  </CardHeader>

                  <CardBody className="flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {result.openfda.brand_name && result.openfda.brand_name[0]}
                    </Typography>
                    <Typography className="flex-grow" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {result.purpose && result.purpose[0]}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Information name={result.openfda.brand_name} />
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </><Pagination total={meta.results.total}
            activePage={currentPage}
            onPageChange={handlePageChange} /></>
       
      ) : fetchingdata ? (
        <Spinner />
      ) : (
        <div className='flex justify-center'>
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
};

export default API;




