import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  return(
    <div className="container">
      <div className="App">
        <main>
          <div className="search-box">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;