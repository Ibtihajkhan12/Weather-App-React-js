// import React, { useState, useEffect } from 'react';
// import './SearchHistory.css';

// const SearchHistory = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
//     setHistory(stored);
//   }, []);

//   const clearHistory = () => {
//     localStorage.removeItem('weatherSearchHistory');
//     setHistory([]);
//   };

//   return (
//     <div className="history-container">

//       <h2>Search History</h2>

//       {history.length === 0 ? (
//         <p className="no-history">No search history found.</p>
//       ) : (
//         <>
//           <ul className="history-list">
//             {history.map((item, index) => (
//               <li key={index} className="history-item">
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <button className="clear-button" onClick={clearHistory}>
//             Clear All
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SearchHistory;




import React, { useState, useEffect } from 'react';
import './SearchHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('weatherSearchHistory');
    setHistory([]);
  };

  return (
    <div className="history-container">

      <div className='btn-main'>  <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button></div>
      <h2>Search History</h2>



      {history.length === 0 ? (
        <p className="no-history">No search history found.</p>
      ) : (
        <>
          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-item">
                {item}
              </li>
            ))}
          </ul>

          <button className="clear-button" onClick={clearHistory}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default SearchHistory;
