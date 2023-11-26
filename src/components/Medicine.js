import React, {useState} from 'react';
import Searchbar from './Searchbar';
import Spinner from './Spinner';


const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
      return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='text-center'>{searchTerm ? `You Searched: ${searchTerm}` : 'Medicine Page Content'}</h1>
        <Spinner />
    </div>
      );
};



  export default Medicine;