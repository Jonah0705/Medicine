// src/components/History.js
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Pagination from './Pagination'; // Import the Pagination component

const History = () => {
  const { user, isAuthenticated } = useAuth0();
  const [historyData, setHistoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 15;

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost/gethistory.php?username=${user?.name}&page=${currentPage}&limit=${itemsPerPage}`);
      setHistoryData(response.data.results);
      setTotalItems(response.data.total);
    } catch (error) {
      console.error('Error fetching search history:', error);
    }
  };

  useEffect(() => {
    // Fetch data from the server when the component mounts or when the page changes
    fetchData();
  }, [user?.name, currentPage]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost/gethistory.php?id=${id}`);
      // Refetch data after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting search term:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-3xl mx-auto mt-8 w-full pl-6">
      <h2 className="text-2xl font-bold mb-4">Search History</h2>
      <ul>
        {historyData.map((item) => (
          <li key={item.id} className="bg-gray-100 p-4 mb-2 rounded-md flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{item.searched_result}</p>
              <p className="text-sm text-gray-500">Searched by: {item.username}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Pagination
        activePage={currentPage}
        total={totalItems} // Pass the total count of items for proper pagination
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default History;



