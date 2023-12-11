import React from 'react';
import { Typography, 
  Avatar } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between bg-indigo-500">
      <Typography color="white" className="font-normal">
        &copy; 
        <Avatar
            alt="avatar"
            src="/images/Medinfo.png"
            variant="rounded"
            size="xxl"
            className="ml-4"
          />
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-4">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}


  export default Footer;