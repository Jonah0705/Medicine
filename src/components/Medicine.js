import React from 'react';
import Searchbar from './Searchbar';


const Medicine = () => {

    const handleSearch = (searchTerm) => {
        console.log(`Search term: ${searchTerm}`);
        // Perform any search-related actions here
      };
      return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='border-solid'>Medicine Page Content</h1>
    </div>
      );
};



  export default Medicine;