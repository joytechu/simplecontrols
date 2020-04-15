# Description
This project provides a re-usable components (Autocomplete,CheckboxList) components for quickly prototyping react applications.

# Controls
- Autocomplete - Simple auto complete functionality for react applications.
- CheckboxList - Simple checkbox list that fires selected and deselected events

# Usage

```jsx
import {Autocomplete, CheckboxList} from "simplereactcontrols"
```

```jsx
      <Autocomplete 
        onFetchData={(searchval,callback) =>  callback( [{ DisplayText: "Your AutoComplete Result", SomeProperty: "Random Prop" }])} 
        onSelectedResult={(item) => { console.log(item)}}
      />
```

```jsx
      <CheckboxList data={[{DisplayText: "Label1", DefaultValue: false, Value: 2},
                           {DisplayText: "label2", DefaultValue: false, Value: 1}, 
                           {DisplayText: "Label2", DefaultValue: false, Value: 2},
                           {DisplayText: "Label4", DefaultValue: false, Value: 3},
                           {DisplayText: "Label5", DefaultValue: false, Value: 2}]}
                           onSelect={(e,item) => console.log(item)} 
                           onDeselect={(e,item) => console.log(item)} 
      />
```


# Styling
The current styling used follows a 7-1 sass design pattern. Controls come with a basic style - this can be extended by overriding the sass variables.

# Tests
![SimpleReactControls Tests](https://github.com/joytechu/simplecontrols/workflows/SimpleReactControls%20Tests/badge.svg)

Tests are currently WIP. Tests Have been created under __tests__. The indended pattern is one control per file.

# Contributing
Please feel free to fork or extend this project, PR'ing your changes (https://github.com/joytechu/simplecontrols.git)

# Changelog
https://github.com/joytechu/simplecontrols/blob/master/CHANGELOG.md

# Road Map
The following functionality is currently being developed.
- Checkbox List
- Unit Tests

# Last Updated
14/04/2020
