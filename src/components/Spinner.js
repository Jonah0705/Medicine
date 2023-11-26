import { Spinner as TailwindSpinner } from "@material-tailwind/react";
 
export function Spinner() {
  
  return<div className="flex items-center justify-center h-screen">
  <TailwindSpinner className="h-12 w-12"/>
</div>;
}

export default Spinner;

