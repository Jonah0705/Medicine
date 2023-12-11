import React from 'react';
import LoginButton from './LoginButton';

const NotLoggedIn = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>Not Logged In, Please Login to use this feature</div>
      <div className='mt-5'>
        <LoginButton />
      </div>
    </div>
  );
};

export default NotLoggedIn;
