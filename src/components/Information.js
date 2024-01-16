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
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleOpen = (value) => {
    setSize(value);
    setButtonPressed(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (buttonPressed) {
        try {
          const response = await fetch(`https://api.fda.gov/drug/label.json?search=${encodeURIComponent(props.name)}+AND+_exists_:openfda.brand_name+AND+_exists_:purpose&limit=1`);
          const result = await response.json();
          setData(result);
          setResults(result.results);
        } catch (error) {
          console.error('Error fetching data:', error);
          setData(null);
        } finally {
          setButtonPressed(false);
        }
      }
    };

    fetchData();
  }, [buttonPressed, props.name]);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          More Information
        </Button>
      </div>
      <Dialog
        open={size === "xl"}
        size={size || "md"}
        handler={() => setSize(null)}
      >
        <DialogHeader>{props.name}</DialogHeader>
        <DialogBody className="max-h-[75vh] overflow-y-auto">
          {results ? (
            <>
              <h2 className='mb-5'>Results:</h2>
              {results.map((result, index) => (
                <div key={index} className='mb-5 flex flex-wrap'>
                  <div className='mb-2.5 w-full'> {result.openfda.brand_name && <><span className='font-black'>Brand Name:  </span> <div>{result.openfda.brand_name[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.warnings && <><span className='font-black'>Warnings: </span>  <div>{result.warnings[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.ask_doctor && <><span className='font-black'>Ask Doctor: </span> <div>{result.ask_doctor[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.when_using && <><span className='font-black'>When Using: </span>  <div>{result.when_using[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.stop_use && <><span className='font-black'>Stop Use: </span>  <div>{result.stop_use[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.indications_and_usage && <><span className='font-black'>Indications and Usage: </span>  <div>{result.indications_and_usage[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.purpose && <><span className='font-black'>Purpose: </span>  <div>{result.purpose[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.active_ingredient && <><span className='font-black'>Active Ingredient: </span>   <div>{result.active_ingredient[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.other_safety_information &&  <><span className='font-black'>Other Safety Information: </span>   <div>{result.other_safety_information[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.dosage_and_administration && <><span className='font-black'>Dosage and Administration: </span> <div>{result.dosage_and_administration[0]}</div></>}</div>
                  <div className='mb-2.5 w-full'> {result.storage_and_handling && <><span className='font-black'>Storage:</span> <div>{result.storage_and_handling[0]}</div></>}</div>
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
            onClick={() => setSize(null)}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Information;