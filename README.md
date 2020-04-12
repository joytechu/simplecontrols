# Description
This project provides a re-usable Autocomplete component for quickly prototyping react applications.

# Controls
- Autocomplete - Simple auto complete functionality for react applications.

# Usage
```jsx
      <Autocomplete 
        onFetchData={(searchval,callback) => setTimeout(() => callback( [{ DisplayText: "llo"}]), 1000)} 
        onSelectedResult={(item) => { console.log(item)}}
      />
```

# Styling
The current styling used follows a 7-1 sass design pattern. Controls come with a basic style - this can be extended by overriding the sass variables.

# Tests
Tests are currently WIP. Tests Have been created under __tests__. The indended pattern is one control per file.

# Contributing
Please feel free to fork or extend this project, PR'ing your changes (https://github.com/joytechu/simplecontrols.git)

# Road Map
The following functionality is currently being developed.
- Checkbox List
- Unit Tests

# Last Updated
12/04/2020