import React, { useState } from 'react';
import Pagination from './components/pagination';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animateDirection, setAnimateDirection] = useState(null);
  const itemsPerPage = 10; 

  
  const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const handlePageChange = (pageNumber) => {
    if (currentPage < pageNumber) {
      setAnimateDirection('slide-out');
    } else {
      setAnimateDirection('slide-in');
    }

    setCurrentPage(pageNumber);
    setTimeout(() => {
      setAnimateDirection(null);
    }, 400); 

   
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="app">
      <h1>Pagination Example</h1>
      <ul className={`item-list ${animateDirection}`}>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
