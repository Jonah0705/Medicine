import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Spinner from './Spinner';
 
export function Information(props) {
  const [size, setSize] = React.useState(null);
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null);
 
  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    const fetchData = async () => {
      var page = 1;
      try {
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name:${encodeURIComponent(props.name)}&limit=1`);
        const result = await response.json();
        setData(result);
        setResults(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } 
    };

    fetchData();
  }, []);
 
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          More Information
        </Button>
      </div>
      <Dialog
        open={
          size === "xl" 
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>{props.name}</DialogHeader>
        <DialogBody>

        {results ? (
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
            </div>
          ))}
        </>
      ) : (
        <Spinner />
      )}
        
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Information;