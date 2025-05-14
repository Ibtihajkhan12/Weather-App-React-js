import React from 'react';
import './SearchHistory.css'; 

const SearchHistory = () => {
  const history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];

  return (
    <div className="history-container">
      <h2>Search History</h2>

      {history.length === 0 ? (
        <p className="no-history">No search history found.</p>
      ) : (
        <ul className="history-list">
          {history.map((item, index) => (
            <li key={index} className="history-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;

