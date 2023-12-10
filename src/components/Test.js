import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Test = () => {
  const rows = [[1, 2, 3], [4, 5, 6]];

  return (
    <div className="flex flex-wrap">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex mb-6">
          {row.map((index) => (
            <Card key={index} className="mx-2 w-1/3">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Test;

