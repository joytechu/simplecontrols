import React from 'react';
import './App.css';
import {Autocomplete, CheckboxList, DropdownList, Drawboard} from "simplereactcontrols"


function App() {
  return (
    <div className="App">

      <h1>Autocomplete</h1>
      <Autocomplete 
        onFetchData={(val,cb) => setTimeout(() => cb( [{ DisplayText: "Gameboy"},
                                                       { DisplayText: "Playstation"},
                                                       { DisplayText: "Xbox"},
                                                       { DisplayText: "Gamecube"},
                                                       { DisplayText: "PC"},
                                                       { DisplayText: "Megadrive"}]), 1000)} 
        onSelectedResult={(item) => { console.log(item)}}
        searchText="Searching for something"
      />
      <h1>CheckboxList</h1>
      <CheckboxList data={[{DisplayText: "This is a really long word", DefaultValue: false, Value: 2},
                           {DisplayText: "label2", DefaultValue: false, Value: 1}, 
                           {DisplayText: "Label2", DefaultValue: false, Value: 2},
                           {DisplayText: "Label4", DefaultValue: false, Value: 3},
                           {DisplayText: "Label5", DefaultValue: false, Value: 2}]}
                           onSelect={(e,item) => console.log(item)} 
                           onDeselect={(e,item) => console.log(item)} 
      />
      <h1>DropdownList</h1>
      <DropdownList DefaultValue="Pink" data={[{DisplayText: "Red",  value: "Red"},
                           {DisplayText: "Green",  value: "Green"}, 
                           {DisplayText: "Blue",  value: "Blue"},
                           {DisplayText: "Pink",  value: "Pink"},
                           {DisplayText: "Purple" , value: "Purple"}]} 
                           onSelect={(e,item) => console.log(item)} 
                           />
                           <div><Drawboard /></div>
    </div>
  );
}
export default App;
