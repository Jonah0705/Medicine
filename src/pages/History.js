import React from 'react';
import { Typography } from "@material-tailwind/react";
import Spinner from '../components/Spinner';

const History = () => {
  return (
    <div className="text-center justify-center">
      <Typography variant="h3" color="blue-gray" className="font-bold">
        <p>Your Serach History:</p>
      </Typography>
    <Spinner />
    </div>
  );
}

export default History;
