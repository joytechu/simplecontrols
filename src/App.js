import React from 'react';
import Autocomplete from './components/autocomplete'

function App() {
  return (
    <div className="App">
      <Autocomplete onInputChanged={(e) => console.log(e)} 
                    onSelectedResult={(e) => console.log(e)} 
                    onFetchData={(e,cb) => { setTimeout(() => cb([{DisplayText: "hello"}, { DisplayText:"I am the best"}]),1000); }}
      />
      hello
      
    </div>
  );
}

export default App;
