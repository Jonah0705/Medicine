import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip
  } from "@material-tailwind/react";

  
  export function ProfileCard() {
    const { user, isAuthenticated } = useAuth0(); 
    return (     
      <Card className="w-48 mt-16 bg-gray-100">
        <CardHeader floated={false} className="h-48">
          <img src={user.picture} alt={user.name} className='w-48 h-48'variant="rounded"/>
          <Avatar src={user.picture} alt={user.name} className='w-48 h-48'variant="rounded"/>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {user.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            User
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
        <div >
          Email: <span className='blur-xl hover:blur-none'>{user.email}</span> 
          </div>
        </CardFooter>
      </Card>
    );
  }

export default ProfileCard
