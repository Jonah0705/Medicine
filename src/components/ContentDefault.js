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

const ContentDefault = ({  }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [fetchingdata, setFetchingdata] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      var page = 1;
      try {
        setFetchingdata(true);
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=&limit=15&skip=${page * 10 - 10}`);
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
  }, []);

  return (
    <div>
      {!error && results && !fetchingdata ? (
        <>
          <h2 className='mb-5'>Results:</h2>
          {results.map((result, index) => (
            <div key={index} className='mb-5 flex flex-wrap'>
               <p className='mb-2.5'> {result.openfda.brand_name && "Brand Name:  " + result.openfda.brand_name[0]}</p>
               <p className='mb-2.5'> {result.warnings && "Warnings: " + result.warnings[0]}</p>
               <p className='mb-2.5'> {result.ask_doctor && "Ask Doctor: " + result.ask_doctor[0]}</p>
               <p className='mb-2.5'> {result.when_using && "When Using: " + result.when_using[0]}</p>
               <p className='mb-2.5'> {result.stop_use && "Stop Use: " + result.stop_use[0]}</p>
               <p className='mb-2.5'> {result.indications_and_usage && "Indications and Usage: " + result.indications_and_usage[0]}</p>
               <p className='mb-2.5'> {result.purpose && "Purpose: " +  result.purpose[0]}</p>
               <p className='mb-2.5'> {result.active_ingredient && "Active Ingredient: " +  result.active_ingredient[0]}</p>
               <p className='mb-2.5'> {result.other_safety_information && "Other Safety Information: " +  result.other_safety_information[0]}</p>
               <p className='mb-2.5'> {result.dosage_and_administration && "Dosage and Administration: " +  result.dosage_and_administration[0]}</p>
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
                  <Button>Read More</Button>
                  <Information result={results}/>
                </CardFooter>
              </Card>
            </div>
          ))}
        </>
      ) : fetchingdata ? (
        <Spinner />
      ) : (
        <div className='error'>
          <p>Type To search the medicine</p>
        </div>
      )}
    </div>
  );
};

export default ContentDefault;
