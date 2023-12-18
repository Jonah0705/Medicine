import React, {useState} from 'react';
import Searchbar from '../components/Searchbar';
import API from '../components/API';
import Information  from '../components/Information';
import ContentDefault from '../components/ContentDefault';
import { useAuth0 } from "@auth0/auth0-react";
import NotLoggedIn from '../components/NotLoggedIn';


const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { user, isAuthenticated } = useAuth0();

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
      return (

        isAuthenticated ? (

          <div>
        <Searchbar onSearch={handleSearch}/>
        <h1 className='text-center'>{searchTerm ? `You Searched for: ${searchTerm}` : null}</h1>
        {searchTerm ? <API searchTerm={searchTerm} /> : <ContentDefault />}

    </div>
      ) : (
          <NotLoggedIn />
      )
    
      
      );

      
};



  export default Medicine;