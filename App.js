// App.js

import React, { useState } from 'react';
import Header from './Header';
import Login from './Login';
import Upload from './Upload';
import List from './List';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('Upload');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return <Login onLogin={handleLogin} />;
      case 'Upload':
        return <Upload />;
      case 'List':
        return <List />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} />
      {renderPage()}
      <div>
        <button onClick={() => handlePageChange('Login')}>Login</button>
        <button onClick={() => handlePageChange('Upload')}>Upload</button>
        <button onClick={() => handlePageChange('List')}>List</button>
      </div>
      
    </div>
  );
};

export default App;
