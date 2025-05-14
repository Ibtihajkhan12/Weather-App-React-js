// // SearchHistory.js
// import React from 'react';

// const SearchHistory = () => {
//   const history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];

//   return (
//     <div className="search-history">
//       <h2>Search History</h2>
//       {history.length === 0 ? (
//         <p>No search history found.</p>
//       ) : (
//         <ul>
//           {history.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchHistory;

// SearchHistory.js
import React from 'react';

const SearchHistory = () => {
  const history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search History</h2>
      {history.length === 0 ? (
        <p>No search history found.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;
