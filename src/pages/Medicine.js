import React, {useState} from 'react';
import Searchbar from '../components/Searchbar';
import API from '../components/API';
import Information  from '../components/Information';
import ContentDefault from '../components/ContentDefault';


const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
      return (
    <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='text-center'>{searchTerm ? `You Searched for: ${searchTerm}` : null}</h1>
        {searchTerm ? <API searchTerm={searchTerm} /> : <ContentDefault />}

    </div>
      
      );
};



  export default Medicine;