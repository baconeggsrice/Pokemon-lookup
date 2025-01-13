import axios from 'axios';
import SearchBar from './components/SearchBar';
import React from 'react';
import { titleStyle } from './components/styles';

function App() {
  return (
    <div className="App">
      <div style={titleStyle}>
        <h1>
          POKEMON LOOKUP APP
        </h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
