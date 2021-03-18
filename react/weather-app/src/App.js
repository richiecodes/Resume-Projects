import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './components/weather.component';

function App() {

  return (
    <div className="app">
      <main>
       <Weather />
      </main>
    </div>
  );
}

export default App;
