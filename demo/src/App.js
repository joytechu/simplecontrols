import React from 'react';
import './App.css';
import {Autocomplete, CheckboxList} from "simplereactcontrols"


function App() {
  return (
    <div className="App">
      <Autocomplete 
        onFetchData={(val,cb) => setTimeout(() => cb( [{ DisplayText: "llo"}]), 1000)} 
        onSelectedResult={(item) => { console.log(item)}}
      />
      <CheckboxList data={[{DisplayText: "Label1", DefaultValue: false, Value: 2},
                           {DisplayText: "label2", DefaultValue: false, Value: 1}, 
                           {DisplayText: "Label2", DefaultValue: false, Value: 2},
                           {DisplayText: "Label4", DefaultValue: false, Value: 3},
                           {DisplayText: "Label5", DefaultValue: false, Value: 2}]}
                           onSelect={(e,item) => console.log(item)} 
                           onDeselect={(e,item) => console.log(item)} 
      />
    </div>
  );
}
export default App;
