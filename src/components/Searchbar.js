import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-indigo-500" style={{minWidth: '100vw'}}>
      <div className="max-w-screen-3xl px-4 py-4 lg:px-8 lg:py-6 mt-4">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-4xl">Find the right medicine for you</h1>
          <p className="mx-auto font-normal text-sm text-white my-6 max-w-lg">Use the search bar below to find the right medicine for your symptoms</p>
          <div className="input-field sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              id="search"
              value={searchTerm}
              onChange={handleChange}
              className="text-base text-gray-400 flex-grow outline-none px-2"
              type="text"
              placeholder="Search your for your ideal medicine"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
              <button
                className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"
                type="submit"
                name="action"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;