import React, {useState} from 'react';
import Searchbar from './Searchbar';
import API from './API';


const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
      return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='text-center'>{searchTerm ? `You Searched: ${searchTerm}` : 'Medicine Page Content'}</h1>
        {searchTerm ? <API searchTerm={searchTerm} /> : null}
    </div>
      
      );
};



  export default Medicine;