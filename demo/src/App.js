import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "simplecontrols"

function App() {
  return (
    <div className="App">
      <Autocomplete 
        onFetchData={(val,cb) => setTimeout(() => cb( [{ DisplayText: "llo"}]), 1000)} 
        onSelectedResult={(item) => { console.log(item)}}
      />
    </div>
  );
}
export default App;
