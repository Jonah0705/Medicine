import React, {useState} from 'react';
import Searchbar from './Searchbar';
import API from './API';
import Information  from './Information';
import ContentDefault from './ContentDefault';


const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
      return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='text-center'>{searchTerm ? `You Searched: ${searchTerm}` : null}</h1>
        {searchTerm ? <API searchTerm={searchTerm} /> : <ContentDefault />}

    </div>
      
      );
};



  export default Medicine;